import {Component, OnDestroy, OnInit} from '@angular/core';
import {SnaccbarService} from '../snaccbar.service';
import {Subscription} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SnaccviewComponent} from './snaccview/snaccview.component';

@Component({
  selector: 'app-snaccbar',
  template: '',
  styles: []
})
export class SnaccbarComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  constructor(private snackBar: MatSnackBar,
              private snaccService: SnaccbarService) { }

  ngOnInit() {
    const sub = this.snaccService.getSnaccs().subscribe(snacc => {
        if (snacc == null ) { return; }
        const ref = this.snackBar.openFromComponent(SnaccviewComponent, {
          duration: snacc.time ? snacc.time : 0, data: snacc
        });

        ref.afterDismissed().subscribe(action => {
          this.snaccService.snaccDismissed();
        });
    });

    this.subscriptions.push(sub);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => {
      if ( !sub.closed ) { sub.unsubscribe(); }
    });
  }
}

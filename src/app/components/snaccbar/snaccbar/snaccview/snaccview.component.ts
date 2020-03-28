import {Component, Inject, OnInit} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from '@angular/material/snack-bar';
import {SnaccModel} from '../../models/snacc.model';
import {interval, Subscription} from 'rxjs';
import {SnaccbarService} from '../../snaccbar.service';

@Component({
  selector: 'app-snaccview',
  templateUrl: './snaccview.component.html',
  styleUrls: ['./snaccview.component.scss']
})
export class SnaccviewComponent implements OnInit {
  subscriptions: Subscription[] = [];
  timeLeft = 0;
  snaccCount = 0;
  interval;
  constructor(
    private service: SnaccbarService,
    public snackBarRef: MatSnackBarRef<SnaccviewComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: SnaccModel
  ) { }

  ngOnInit() {
    if (this.data.time) {
      this.timeLeft = this.data.time;
      this.interval = setInterval(() => {
        this.timeLeft -= 25;
        if (this.timeLeft <= 0) {
          this.stopTimer();
        }
      }, 25);
    }

    const sub = this.service.getSnaccCount().subscribe(count =>  {
      this.snaccCount = count;
    });
  }

  stopTimer() {
    clearInterval(this.interval);
  }

  onDismiss() {
    this.stopTimer();
    this.snackBarRef.dismissWithAction();
  }
}

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {SnaccbarService} from '../../components/snaccbar/snaccbar.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  snackbarForm = new FormGroup({
    messages: new FormControl('Happy times!'),
    time: new FormControl(3000),
    buttonText: new FormControl('OK')
  });

  constructor(private snaccService: SnaccbarService) { }

  ngOnInit() {
  }

  onCreateSnacc() {
    const messages: string[] = this.snackbarForm.get('messages').value.split(',');

    this.snaccService.addSnacc({
      time: this.snackbarForm.get('time').value,
      buttonText: this.snackbarForm.get('buttonText').value,
      text: messages
    });
  }
}

import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PlayerData} from '../../models/PlayerData';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-playerdata-editor',
  templateUrl: './playerdata-editor.component.html',
  styleUrls: ['./playerdata-editor.component.scss']
})
export class PlayerdataEditorComponent implements OnInit {

  playerForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    phone: new FormControl(''),
    gang: new FormControl(''),
    standing: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(public dialogRef: MatDialogRef<PlayerdataEditorComponent>,
              @Inject(MAT_DIALOG_DATA) public data: PlayerData) { }
  ngOnInit() {
    if (this.data) {
      const d = this.data;

      this.playerForm.patchValue({
        id: d.id,
        name: d.name,
        phone: d.phone,
        gang: d.gang,
        standing: d.standing,
        description: d.description
      });
    }
  }

  onAcceptClicked() {
      const player: PlayerData = this.playerForm.getRawValue();
      return player;
  }
}

import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {PlayerData} from '../models/PlayerData';
import {MatDialog} from '@angular/material/dialog';
import {PlayerdataEditorComponent} from '../dummies/playerdata-editor/playerdata-editor.component';
import {RoleplayGameService} from '../service/roleplay-game.service';
import {SnaccbarService} from '../../../components/snaccbar/snaccbar.service';

@Component({
  selector: 'app-roleplay-game',
  templateUrl: './roleplay-game.component.html',
  styleUrls: ['./roleplay-game.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class RoleplayGameComponent implements OnInit {
  currentPlayerEdit: PlayerData = undefined;

  dataSource: PlayerData[] = [] ;
  columnsToDisplay = ['name', 'phone', 'gang', 'standing', 'description', 'actions'];
  expandedElement: PlayerData | null;

  constructor(public dialog: MatDialog, private service: RoleplayGameService,  private snaccService: SnaccbarService) { }

  openDialog(data?: PlayerData): void {
    const dialogRef = this.dialog.open(PlayerdataEditorComponent, {
      width: '25vw',
      // tslint:disable-next-line:max-line-length
      data: data ? {id: data.id, name: data.name, phone: data.phone, gang: data.gang, standing: data.standing, description: data.description} : null
    });

    dialogRef.afterClosed().subscribe(result => {
      const newData = result;
      if (newData) {
        console.log('Is ok to update');
        if (!this.currentPlayerEdit) {
          this.service.addNewPlayer(newData).subscribe(() => {
            this.snaccService.addSnacc({text: [`Added ${newData.name} to the list!`], time: 3000});
            this.updatePlayers();
          });
        } else if (this.currentPlayerEdit) {
          this.service.UpdatePlayer(newData).subscribe(res => {
            this.snaccService.addSnacc({text: [`Updated ${newData.name}!`], time: 3000});
            this.updatePlayers();
          });
        }
      }

      this.currentPlayerEdit = undefined;
    });
  }

  ngOnInit() {
    this.service.getAllPlayers().subscribe(res => {
      this.dataSource = res;
    });
  }

  editPlayer(player: any) {
    this.currentPlayerEdit = player ? player : undefined;
    this.openDialog(player);
  }

  addLog(player: PlayerData) {
      const log = window.prompt('Enter log to add');
      if (log) {
        player.logs = player.logs ? [log, ...player.logs] : [log];
        this.service.UpdatePlayer(player).subscribe(res => {
          this.snaccService.addSnacc({text: [`Added log to ${player.name}!`], time: 3000});
          this.updatePlayers();
        });
      }
  }

  deletePlayer(player: any) {
   this.service.deletePlayer(player).subscribe(() => {
     this.snaccService.addSnacc({text: [`Deleted entry ${player.name}!`], time: 3000});
     this.updatePlayers();
   });

  }

  updatePlayers() {
    this.service.getAllPlayers().subscribe(res => {
      this.dataSource = res;
    });
  }
}

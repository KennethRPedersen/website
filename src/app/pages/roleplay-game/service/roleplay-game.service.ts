import { Injectable } from '@angular/core';
import {PlayerData} from '../models/PlayerData';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {SnaccbarService} from '../../../components/snaccbar/snaccbar.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleplayGameService {

  constructor(private http: HttpClient) { }

  public addNewPlayer(player: PlayerData) {
      const body: any = {};
      body.name = player.name;
      body.phone = player.phone;
      body.gang = player.gang;
      body.standing = player.standing;
      body.description = player.description;
      body.logs = [];

      return this.http.post<PlayerData>(environment.gangip, player);
  }

  public getAllPlayers(): Observable<PlayerData[]> {
      return this.http.get<PlayerData[]>(environment.gangip);
  }

  UpdatePlayer(player: PlayerData): Observable<any> {
    const body: any = {};
    body.id = player.id;
    body.name = player.name;
    body.phone = player.phone;
    body.gang = player.gang;
    body.standing = player.standing;
    body.description = player.description;
    body.logs = player.logs;

    return this.http.put(environment.gangip + `/${player.id}`, body);
  }

  deletePlayer(player: any): Observable<any> {
    return this.http.delete(environment.gangip + `/${player.id}`);
  }
}

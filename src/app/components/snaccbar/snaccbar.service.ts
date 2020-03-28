import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {SnaccModel} from '../snaccbar/models/snacc.model';

@Injectable({
  providedIn: 'root'
})
export class SnaccbarService {

  private snaccList: SnaccModel[] = [];
  private activeSnacc: SnaccModel;
  private snaccSubject = new BehaviorSubject<SnaccModel>(null);
  private snaccCount = new BehaviorSubject<number>(0);

  constructor() {
  }

  public getSnaccCount(): Observable<number> {
    return this.snaccCount;
  }

  public getSnaccs(): Observable<SnaccModel> {
    return this.snaccSubject;
  }

  private nextSnacc() {
    if (this.snaccList.length === 0) { return; }

    this.snaccSubject.next(this.snaccList[0]);
    this.snaccCount.next(this.snaccList.length);
  }

  public snaccDismissed() {
    this.snaccList.splice(0, 1);
    this.nextSnacc();
  }

  public addSnacc(snacc: SnaccModel) {
    this.snaccList.push(snacc);

    if (this.snaccList.length === 1) {
      this.nextSnacc();
    }

    this.snaccCount.next(this.snaccList.length);
  }
}

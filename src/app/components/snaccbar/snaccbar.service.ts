import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {SnaccModel} from '../snaccbar/models/snacc.model';

@Injectable({
  providedIn: 'root'
})
export class SnaccbarService {

  private snaccList: SnaccModel[] = [];
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
    if (this.snaccList.length === 0) {
      this.snaccSubject.next(undefined);
      return;
    }

    this.snaccSubject.next(this.snaccList.shift());
    this.updateSnaccCount();
  }

  public snaccDismissed() {
    this.nextSnacc();
  }

  public addSnacc(snacc: SnaccModel) {
    this.snaccList.push(snacc);
    if (!this.snaccSubject.value) {
      this.nextSnacc();
    }
    this.updateSnaccCount();
  }

  private updateSnaccCount() {
    this.snaccCount.next(this.snaccList.length);
  }
}

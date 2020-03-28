import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() openSidenav: EventEmitter<any> = new EventEmitter();
  @Input() sidenavStatus: boolean;


  constructor() { }

  ngOnInit() {
  }

  menuClicked() {
      this.openSidenav.emit(true);
  }
}

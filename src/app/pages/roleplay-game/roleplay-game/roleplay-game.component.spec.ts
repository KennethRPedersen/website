import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleplayGameComponent } from './roleplay-game.component';

describe('RoleplayGameComponent', () => {
  let component: RoleplayGameComponent;
  let fixture: ComponentFixture<RoleplayGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleplayGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleplayGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

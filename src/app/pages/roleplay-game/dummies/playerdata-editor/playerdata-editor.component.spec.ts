import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerdataEditorComponent } from './playerdata-editor.component';

describe('PlayerdataEditorComponent', () => {
  let component: PlayerdataEditorComponent;
  let fixture: ComponentFixture<PlayerdataEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerdataEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerdataEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

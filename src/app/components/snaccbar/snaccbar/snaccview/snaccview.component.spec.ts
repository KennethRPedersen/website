import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnaccviewComponent } from './snaccview.component';

describe('SnaccviewComponent', () => {
  let component: SnaccviewComponent;
  let fixture: ComponentFixture<SnaccviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnaccviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnaccviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

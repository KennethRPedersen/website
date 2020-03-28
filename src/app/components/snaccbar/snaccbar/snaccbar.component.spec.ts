import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnaccbarComponent } from './snaccbar.component';

describe('SnaccbarComponent', () => {
  let component: SnaccbarComponent;
  let fixture: ComponentFixture<SnaccbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnaccbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnaccbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

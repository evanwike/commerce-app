import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateNotificationComponent } from './state-notification.component';

describe('StateNotificationComponent', () => {
  let component: StateNotificationComponent;
  let fixture: ComponentFixture<StateNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

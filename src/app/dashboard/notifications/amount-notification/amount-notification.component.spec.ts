import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountNotificationComponent } from './amount-notification.component';

describe('AmountNotificationComponent', () => {
  let component: AmountNotificationComponent;
  let fixture: ComponentFixture<AmountNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

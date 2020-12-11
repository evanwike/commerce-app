import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryNotificationComponent } from './category-notification.component';

describe('CategoryNotificationComponent', () => {
  let component: CategoryNotificationComponent;
  let fixture: ComponentFixture<CategoryNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

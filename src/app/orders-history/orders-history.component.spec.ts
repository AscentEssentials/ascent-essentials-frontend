import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersHistoryComponent } from './orders-history.component';

describe('OrderHistoryComponent', () => {
  let component: OrdersHistoryComponent;
  let fixture: ComponentFixture<OrdersHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

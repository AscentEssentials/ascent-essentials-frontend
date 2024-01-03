import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierAccountComponent } from './supplier-account.component';

describe('SupplierAccountComponent', () => {
  let component: SupplierAccountComponent;
  let fixture: ComponentFixture<SupplierAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupplierAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

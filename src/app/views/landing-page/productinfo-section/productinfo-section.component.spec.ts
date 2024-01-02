import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductinfoSectionComponent } from './productinfo-section.component';

describe('ProductinfoSectionComponent', () => {
  let component: ProductinfoSectionComponent;
  let fixture: ComponentFixture<ProductinfoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductinfoSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductinfoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

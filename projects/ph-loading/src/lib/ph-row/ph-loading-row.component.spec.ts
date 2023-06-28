import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderLoadingRowComponent } from './ph-loading-row.component';

describe('PlaceholderLoadingComponent', () => {
  let component: PlaceholderLoadingRowComponent;
  let fixture: ComponentFixture<PlaceholderLoadingRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlaceholderLoadingRowComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlaceholderLoadingRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

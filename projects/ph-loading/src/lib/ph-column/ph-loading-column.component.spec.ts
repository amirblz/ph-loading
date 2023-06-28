import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderLoadingColumnComponent } from './ph-loading-column.component';

describe('PlaceholderLoadingComponent', () => {
  let component: PlaceholderLoadingColumnComponent;
  let fixture: ComponentFixture<PlaceholderLoadingColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlaceholderLoadingColumnComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlaceholderLoadingColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

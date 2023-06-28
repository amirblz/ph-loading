import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderLoadingContainerComponent } from './ph-loading-container.component';

describe('PlaceholderLoadingComponent', () => {
  let component: PlaceholderLoadingContainerComponent;
  let fixture: ComponentFixture<PlaceholderLoadingContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlaceholderLoadingContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlaceholderLoadingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

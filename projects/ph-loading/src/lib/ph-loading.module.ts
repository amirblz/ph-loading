import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceholderLoadingContainerComponent } from './ph-container/ph-loading-container.component';
import { PlaceholderLoadingRowComponent } from './ph-container/ph-row/ph-loading-row.component';
import { PlaceholderLoadingColumnComponent } from './ph-container/ph-row/ph-column/ph-loading-column.component';

@NgModule({
  declarations: [
    PlaceholderLoadingContainerComponent,
    PlaceholderLoadingRowComponent,
    PlaceholderLoadingColumnComponent,
  ],
  imports: [CommonModule],
  exports: [
    PlaceholderLoadingContainerComponent,
    PlaceholderLoadingRowComponent,
    PlaceholderLoadingColumnComponent,
  ],
})
export class PlaceholderLoadingModule {}
export * from './ph-loading.module';
export * from './ph-container/ph-loading-container.component';
export * from './ph-container/ph-row/ph-loading-row.component';
export * from './ph-container/ph-row/ph-column/ph-loading-column.component';

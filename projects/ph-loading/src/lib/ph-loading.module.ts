import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceholderLoadingContainerComponent } from './ph-container/ph-loading-container.component';
import { PlaceholderLoadingColumnComponent } from './ph-column/ph-loading-column.component';
import { PlaceholderLoadingRowComponent } from './ph-row/ph-loading-row.component';

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

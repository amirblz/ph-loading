import { Component, Input } from '@angular/core';

@Component({
  selector: 'ph-loading',
  templateUrl: './ph-loading-container.component.html',
  styleUrls: ['./ph-loading-container.component.scss'],
})
export class PlaceholderLoadingContainerComponent {
  @Input() bgColor: string;
  @Input() border: string;
  @Input() padding: string;
  @Input() bRadius: string;
  @Input() rowGap: string;
  @Input() marginB: string;
}

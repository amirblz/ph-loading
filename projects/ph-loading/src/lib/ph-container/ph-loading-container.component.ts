import { Component, Input } from '@angular/core';

@Component({
  selector: 'ph-loading',
  templateUrl: './ph-loading-container.component.html',
  styleUrls: ['./ph-loading-container.component.scss'],
})
export class PlaceholderLoadingContainerComponent {
  @Input() public bgColor: string;
  @Input() public border: string;
  @Input() public padding: string;
  @Input() public bRadius: string;
  @Input() public rowGap: string;
  @Input() public marginB: string;
}

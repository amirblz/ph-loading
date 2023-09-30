import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ph-loading-col',
  templateUrl: './ph-loading-column.component.html',
  styleUrls: ['./ph-loading-column.component.scss'],
})
export class PlaceholderLoadingColumnComponent {
  @Input() public col: string;
  @Input() public height: string;
  @Input() public isFilled: boolean;
  @Input() public isCircle: boolean;

  circleWidth: string;
  aspectRatio: string;
  circleFlex: string;

  ngOnInit(): void {
    if (!this.isCircle) {
      this.height = this.height + 'px';
    } else {
      this.height = 'unset';
      this.circleWidth = 'unset';
      this.aspectRatio = '1/1';
      this.circleFlex = '1';
    }
  }
}

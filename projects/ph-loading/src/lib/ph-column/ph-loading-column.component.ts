import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ph-loading-col',
  templateUrl: './ph-loading-column.component.html',
  styleUrls: ['./ph-loading-column.component.scss'],
})
export class PlaceholderLoadingColumnComponent implements OnInit {
  @Input() height: string;
  @Input() fill: boolean;
  @Input() col: string;
  @Input() isCircle: boolean;
  circleWidth: string;

  constructor() {}

  ngOnInit(): void {
    if (!this.isCircle) {
      this.height = this.height + 'px';
    } else {
      this.height = this.height + 'vw';
      this.circleWidth = this.height;
    }
    console.log(this.circleWidth);
  }
}

import { Component, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'ph-loading-col',
  templateUrl: './ph-loading-column.component.html',
  styleUrls: ['./ph-loading-column.component.scss'],
})
export class PlaceholderLoadingColumnComponent {
  @Input() public col: string;
  @Input() public height: string;

  private _filled: boolean;
  @Input()
  get filled() {
    return this._filled;
  }
  set filled(value: any) {
    this._filled = coerceBooleanProperty(value);
  }
  private _circle: boolean;
  @Input()
  get circle() {
    return this._circle;
  }
  set circle(value: any) {
    this._circle = coerceBooleanProperty(value);
  }

  circleWidth: string;
  aspectRatio: string;
  circleFlex: string;

  ngOnInit(): void {
    if (!this.circle) {
      this.height = this.height + 'px';
    } else {
      this.height = 'unset';
      this.circleWidth = 'unset';
      this.aspectRatio = '1/1';
      this.circleFlex = '1';
    }
  }
}

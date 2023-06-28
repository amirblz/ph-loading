import {
  Component,
  ContentChildren,
  OnInit,
  QueryList,
  Input,
} from '@angular/core';
import { PlaceholderLoadingRowComponent } from '../ph-row/ph-loading-row.component';

@Component({
  selector: 'ph-loading',
  templateUrl: './ph-loading-container.component.html',
  styleUrls: ['./ph-loading-container.component.scss'],
})
export class PlaceholderLoadingContainerComponent implements OnInit {
  @Input() bgColor: string;
  @Input() border: string;
  @Input() padding: string;
  @Input() bRadius: string;
  @Input() rowGap: string;
  @Input() marginB: string;
  constructor() {}

  ngOnInit(): void {}
}

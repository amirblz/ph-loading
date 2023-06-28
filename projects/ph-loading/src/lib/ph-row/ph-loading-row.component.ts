import {
  Component,
  OnInit,
  Input,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { PlaceholderLoadingColumnComponent } from '../ph-column/ph-loading-column.component';

@Component({
  selector: 'ph-loading-row',
  templateUrl: './ph-loading-row.component.html',
  styleUrls: ['./ph-loading-row.component.scss'],
})
export class PlaceholderLoadingRowComponent implements OnInit {
  @ContentChildren(PlaceholderLoadingColumnComponent)
  columns: QueryList<PlaceholderLoadingColumnComponent>;

  @Input() rowGap: string;

  constructor() {}

  ngOnInit(): void {}
}

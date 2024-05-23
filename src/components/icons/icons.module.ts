import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IconsComponent,
  locationComponent,
  shopComponent,
  saveComponent,
  iconComponent,
  backComponent,
  arrowDownComponent,
} from './icons-component';

const components = [
  IconsComponent,
  locationComponent,
  shopComponent,
  saveComponent,
  iconComponent,
  backComponent,
  arrowDownComponent,
];

@NgModule({
  declarations: [components],
  exports: [components],
  imports: [CommonModule],
})
export class IconsModule {}

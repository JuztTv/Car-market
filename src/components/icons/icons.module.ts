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
  checkDownComponent,
  likeComponent,
  dislikeComponent,
  dislikeFillComponent,
  likeFillComponent,
} from './icons-component';

const components = [
  IconsComponent,
  locationComponent,
  shopComponent,
  saveComponent,
  iconComponent,
  backComponent,
  arrowDownComponent,
  checkDownComponent,
  likeComponent,
  dislikeComponent,
  dislikeFillComponent,
  likeFillComponent,
];

@NgModule({
  declarations: [components],
  exports: [components],
  imports: [CommonModule],
})
export class IconsModule {}

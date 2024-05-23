import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsCarComponent } from 'src/components/details-car/details-car/details-car.component';
import { HomeComponent } from 'src/components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'HomePage' } },
  {
    path: 'car-detail/:id',
    component: DetailsCarComponent,
    data: { animation: 'DetailPage' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

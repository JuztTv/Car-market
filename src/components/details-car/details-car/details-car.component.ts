import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IconsModule } from 'src/components/icons/icons.module';
import { AllCarData } from 'src/components/shared/models/all-car-data.model';
import { carsData } from 'src/components/shared/models/car-data-component';
import { CarService } from 'src/components/shared/service/car.service';

@Component({
  selector: 'app-details-car',
  templateUrl: './details-car.component.html',
  styleUrls: ['./details-car.component.scss'],
})
export class DetailsCarComponent {
  cars: AllCarData | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private carService: CarService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.carService.getCarById(id).subscribe((data: AllCarData) => {
      this.cars = data;
    });
  }
  goBack() {
    this.router.navigate(['/']);
  }
}

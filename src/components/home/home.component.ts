import { AllCarData } from 'src/components/shared/models/all-car-data.model';
import { Component } from '@angular/core';
import { carData, modelData } from '../shared/models/car-filter.component';
import { IconsModule } from '../icons/icons.module';
import { Router } from '@angular/router';
import { CarService } from 'src/components/shared/service/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  cars: AllCarData[] = [];
  carData = carData;
  modelData = modelData;
  selectedSortOption: string = 'views';

  constructor(private router: Router, private carService: CarService) {}

  navigateToDetail(id: number) {
    this.router.navigate(['/car-detail', id]);
  }

  ngOnInit(): void {
    this.carService.getCars().subscribe((data: AllCarData[]) => {
      this.cars = data;
    });
  }

  sortCards() {
    switch (this.selectedSortOption) {
      case 'views':
        this.cars.sort((a, b) => b.viewCount - a.viewCount);
        break;
      case 'priceAsc':
        this.cars.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case 'priceDesc':
        this.cars.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      default:
        break;
    }
  }

  onViewCount(carId: number): void {
    this.carService.addViewCount(carId).subscribe((updatedCar: AllCarData) => {
      const carIndex = this.cars.findIndex((car) => car.id === carId);
      if (carIndex !== -1) {
        this.cars[carIndex].viewCount++;
      }
      console.log(
        'Contador de vistas actualizado para el coche con ID:',
        carId
      );
    });
  }
}

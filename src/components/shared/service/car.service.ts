import { Injectable } from '@angular/core';
import { AllCarData } from './../models/all-car-data.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private baseUrl = 'http://localhost:8080/api/car';

  constructor(private http: HttpClient) {}

  getCars(): Observable<AllCarData[]> {
    return this.http.get<AllCarData[]>(`${this.baseUrl}`);
  }

  getCarById(id: number): Observable<AllCarData> {
    return this.http.get<AllCarData>(`${this.baseUrl}/one?id=${id}`);
  }

  addViewCount(carId: number): Observable<AllCarData> {
    return this.http.put<AllCarData>(
      `${this.baseUrl}/viewCount?id=${carId}`,
      {}
    );
  }
}

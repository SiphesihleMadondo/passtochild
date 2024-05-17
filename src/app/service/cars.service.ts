import { Injectable } from '@angular/core';
import { Cars } from '../model/cars';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor() { }

 cars :  Cars [] = [{
    id: 0,
    model: 'X6',
    make: 'BMW',
    registration: 'XLH093GP',
    color: 'Black',
    mileage: 125465,
    price: 2000000,
    url: '../assets/cars/bmw-m-series-x6-m-sd-bmw.jpg'
  },

  {
    id:1,
    model: 'C Class',
    make: 'Mercedes',
    registration: 'CXVS30GP',
    color: 'White',
    mileage: 63745,
    price: 3000000,
    url: '../assets/cars/Merc class.jpg'

  },
  {
    id:2,
    model: 'Civic',
    make: 'Honda',
    registration: 'CXTS40GP',
    color: 'Red',
    mileage: 63745,
    price: 4000000,
    url: '../assets/cars/Honda_Civic.jpg'

  }
]

      calculatedPrice(id: number): number{
        let calculatedPrice = this.cars[id].price * 2;
        return calculatedPrice;
      }
}

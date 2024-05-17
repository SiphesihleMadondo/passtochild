import { Component, Input, OnInit } from '@angular/core';
import { Cars } from '../model/cars';
import { CarsService } from '../service/cars.service';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit {

  @Input() cars? = {} as Cars [] 
  calculatedPrice = 0
  price :string[] = []
  constructor(private cars_service: CarsService) {
       this.cars = cars_service.cars
  }
  ngOnInit(): void {
    this.getCalculatedPrice()
  }

  getCalculatedPrice(): number{
    
    this.cars?.forEach(element => {
       this.calculatedPrice = this.cars_service.calculatedPrice(element.id)
       let formatted_price = this.getPriceFormatedInZAR(this.calculatedPrice)
       this.price.push(formatted_price)
    });
   
    return this.calculatedPrice;
   
  }
   
  getPriceFormatedInZAR(value: number) {
    return formatCurrency(value, 'en-za', 'R', 'ZAR', '1.2-2');
  }
}

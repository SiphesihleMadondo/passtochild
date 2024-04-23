import { Component, Input } from '@angular/core';
import { Cars } from '../cars';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() cars: Cars | undefined

    Cars = [{
    id: 0,
    model: 'X6',
    make: 'BMW',
    registration: 'XLH093GP',
    color: 'Black',
    mileage: 125465,
    price: 2000000
  },

  {
    id:1,
    model: 'C Class',
    make: 'Mercedes',
    registration: 'CXVS30GP',
    color: 'White',
    mileage: 63745,
    price: 3000000

  }
]
}

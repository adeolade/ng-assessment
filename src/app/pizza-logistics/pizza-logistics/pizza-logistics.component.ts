import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, Subscription, Observable } from 'rxjs';
import { DriverState } from '../../shared/enums/driver-state.enum';
import { PizzaState } from '../../shared/enums/pizza-state.enum';
import { FormControl } from '@angular/forms';
import { PizzaOrder } from 'src/app/shared/models/pizza-order.model';

@Component({
  selector: 'app-pizza-logistics',
  templateUrl: './pizza-logistics.component.html',
  styleUrls: ['./pizza-logistics.component.scss']
})
export class PizzaLogisticsComponent implements OnInit {
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  orderList$: Observable<PizzaOrder>;

  constructor() { }

  public ngOnInit(): void {
  }

  get openOrderList() {
      return '';
  }

  get readyForDeliveryList() {
    return '';
  }

  get deliveredList() {
    return '';
  }

  public sendToKitchenClick() {

  }

  public placeOrder() {
    
  }

  public assignForDelivery() {
    
  }

}

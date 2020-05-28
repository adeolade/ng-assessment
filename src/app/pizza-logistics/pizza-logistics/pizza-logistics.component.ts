import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DriverState } from '../../shared/enums/driver-state.enum';
import { PizzaState } from '../../shared/enums/pizza-state.enum';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PizzaOrder } from 'src/app/shared/models/pizza-order.model';
import { Driver } from 'src/app/shared/models/driver.model';
import { PizzaTopping } from 'src/app/shared/models/pizza-topping.model';
import { OrdersService } from 'src/app/shared/services/orders.service';
import { PizzaSize } from 'src/app/shared/models/pizza-size.model';

@Component({
  selector: 'app-pizza-logistics',
  templateUrl: './pizza-logistics.component.html',
  styleUrls: ['./pizza-logistics.component.scss']
})
export class PizzaLogisticsComponent implements OnInit {
  
  orderForm: FormGroup;
  toppings = new FormControl();
  drivers = new FormControl();
  ordersList: PizzaOrder[];
  driversList: Driver[];
  toppingsList: PizzaTopping[];
  sizesList: PizzaSize[] = [
    {
      id: "1",
      name: "small"
    },
    {
      id: "2",
      name: "medium"
    },
    {
      id: "3",
      name: "large"
    },
  ];

  constructor(private pizzaService: OrdersService, private fb: FormBuilder) 
  { 
    this.pizzaService.getOrders().subscribe(orders => this.ordersList = orders);
    this.pizzaService.getToppings().subscribe(toppings => this.toppingsList = toppings);
    this.pizzaService.getDrivers().subscribe(drivers => this.driversList = drivers);
  }

  public ngOnInit(): void {
    this.orderForm = this.fb.group({
      fullName: ['', Validators.required],
      size: ['', [Validators.required]]
    });
  }

  get openOrderList(): PizzaOrder[] {
      return this.ordersList && this.ordersList.filter(order => order.state === PizzaState.open);
  }

  get readyForDeliveryList(): PizzaOrder[] {
    return this.ordersList && this.ordersList.filter(order => order.state === PizzaState.ready);
  }

  get deliveredList(): PizzaOrder[] {
    return this.ordersList && this.ordersList.filter(order => order.state === PizzaState.delivered);
  }

  public showToppings(toppings: PizzaTopping[]): string {
    let toppingString = '';
    if(this.toppingsList) {
      for(var x=0; x < toppings.length; x++) {
        const selected = this.toppingsList.find(top => toppings[x].id === top.id);
        if(selected) {
          toppingString = toppingString.concat(selected.name, x===toppings.length-1 ? '' : ', ');
        }
      }
    }
    return toppingString === '' ? 'No Toppings' : toppingString;
  }

  public sendToKitchenClick(orderId: string): void {
      let update = this.ordersList.find(o => o.id === orderId);
      update.state = PizzaState.ready;
  }

  public placeOrderClick(): void {
    debugger
    const id = this.ordersList.length+1;
      const order: PizzaOrder = {
        id: id.toString(),
        size: +this.orderForm.get("size").value,
        customerName: this.orderForm.get("fullName").value,
        state: PizzaState.open,
        toppings: this.toppings.value
      };
      this.pizzaService.addOrder(order).subscribe();
      this.ordersList.push(order);
      this.orderForm.reset();
      this.toppings.reset();
  }

  public assignForDeliveryClick(orderId: string, driverId: string) {
    let update = this.ordersList.find(o => o.id === orderId);
    update.driverId = driverId;
    update.state = PizzaState.delivered;
  }

  public getDriver(driverId: string): string {
    const myDriver = this.driversList.find(driver => driver.id === driverId);
    return `${myDriver.firstName} ${myDriver.lastName}`;
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Driver } from '../models/driver.model';
import { PizzaOrder } from '../models/pizza-order.model';
import { PizzaTopping } from '../models/pizza-topping.model';
import { PizzaSize } from '../models/pizza-size.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  orderUrl = 'http://localhost:4300';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  public getDrivers(): Observable<Driver[]> {
    return this.http.get<Driver[]>(`${this.orderUrl}/drivers`);
  }

  public getOrders(): Observable<PizzaOrder[]> {
    return this.http.get<PizzaOrder[]>(`${this.orderUrl}/orders`);
  }

  public getToppings(): Observable<PizzaTopping[]> {
    return this.http.get<PizzaTopping[]>(`${this.orderUrl}/toppings`);
  }

  public getSizes(): Observable<PizzaSize[]> {
    return this.http.get<PizzaSize[]>(`${this.orderUrl}/sizes`);
  }

  public addOrder(newPizza: PizzaOrder): Observable<PizzaOrder> {
    return this.http.post<PizzaOrder>(`${this.orderUrl}/orders`, newPizza, this.httpOptions)
  }
}

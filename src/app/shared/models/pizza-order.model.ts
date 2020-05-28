import { PizzaState } from '../enums/pizza-state.enum';
import { PizzaTopping } from './pizza-topping.model';

export interface PizzaOrder {
  id: string;
  customerName: string;
  toppings: PizzaTopping[];
  size: number;
  state: PizzaState;
  driverId?: string;
}

import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { DriverState } from '../../shared/enums/driver-state.enum';
import { PizzaState } from '../../shared/enums/pizza-state.enum';

@Component({
  selector: 'app-pizza-logistics',
  templateUrl: './pizza-logistics.component.html',
  styleUrls: ['./pizza-logistics.component.scss']
})
export class PizzaLogisticsComponent implements OnInit {
  constructor() { }

  public ngOnInit(): void {
  }
}

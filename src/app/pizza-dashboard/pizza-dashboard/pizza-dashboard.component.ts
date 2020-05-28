import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PizzaState } from '../../shared/enums/pizza-state.enum';
import { NavItem } from '../../shared/models/nav-item.model';

@Component({
  selector: 'app-pizza-dashboard',
  templateUrl: './pizza-dashboard.component.html',
  styleUrls: ['./pizza-dashboard.component.scss']
})
export class PizzaDashboardComponent implements OnInit {
  private subscriptions = new Subscription();
  public totalOrderCount = 0;
  public enRouteCount = 0;
  public inKitchenCount = 0;
  public deliveredCount = 0;

  public navItems: NavItem[] = [
    {
      displayName: 'Logistics',
      route: '/logistics',
    }
  ];

  constructor() { }

  public ngOnInit(): void {
  }
}

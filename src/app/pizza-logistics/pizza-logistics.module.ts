import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PizzaLogisticsRoutingModule } from './pizza-logistics-routing.module';
import { PizzaLogisticsComponent } from './pizza-logistics/pizza-logistics.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    PizzaLogisticsComponent,
  ],
  imports: [
    CommonModule,
    PizzaLogisticsRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule
  ],
})
export class PizzaLogisticsModule { }

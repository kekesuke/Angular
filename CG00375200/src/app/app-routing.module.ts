import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesPeopleComponent } from './components/sales-people/sales-people.component';
import { SalesPeopleUpdateComponent } from './components/sales-people-update/sales-people-update.component';
import { SalesPeopleDeleteComponent } from './components/sales-people-delete/sales-people-delete.component';
import { AddSalesPersonComponent } from './components/add-sales-person/add-sales-person.component';


const routes: Routes = [
  { path: "salespeople", component: SalesPeopleComponent },
  { path: "updateSalesperson", component: SalesPeopleUpdateComponent },
  { path: "deleteSalesperson", component: SalesPeopleDeleteComponent },
  { path: "newSalesperson", component: AddSalesPersonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SalesPeopleComponent, SalesPeopleDeleteComponent, SalesPeopleUpdateComponent, AddSalesPersonComponent]

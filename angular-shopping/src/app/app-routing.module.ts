import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ItemsComponent} from './items/items.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ItemsDetailsComponent} from './items/items-details/items-details.component';
import {ItemEditComponent} from './items/item-edit/item-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/items', pathMatch: 'full'},
  {path: 'items', component: ItemsComponent, children:[
      {path: ':new', component: ItemEditComponent},
      {path: ':id', component: ItemsDetailsComponent},
      {path: ':id/edit', component: ItemEditComponent}
    ]},
  {path: 'shopping-list', component: ShoppingListComponent}, 
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

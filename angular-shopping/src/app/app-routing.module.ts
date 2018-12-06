import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ItemsComponent} from './items/items.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ItemsDetailsComponent} from './items/items-details/items-details.component';
import {ItemEditComponent} from './items/item-edit/item-edit.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {SignupFinishComponent} from './auth/signup-finish/signup-finish.component';
import {NewItemComponent} from './items/items-list/new-item/new-item.component';
import {AuthGuard} from './auth/auth-guard.service';
import {CollectionsComponent} from './collections/collections.component'

const routes: Routes = [
  { path: '', redirectTo: '/items', pathMatch: 'full'},
  {path: 'items', component: ItemsComponent, children:[
      {path: 'new', component: NewItemComponent, canActivate: [AuthGuard]},
      {path: ':id', component: ItemsDetailsComponent}, 
      {path: ':id/edit', component: ItemEditComponent, canActivate: [AuthGuard]},
    ]},
  {path: 'shopping-list', component: ShoppingListComponent}, 
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup-finish', component: SignupFinishComponent},
  {path : 'collections', component: CollectionsComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

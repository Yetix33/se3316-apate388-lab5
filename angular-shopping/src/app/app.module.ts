import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'

import { environment } from '../environments/environment';
import { HeaderComponent } from './header/header.component';
import { ItemsComponent } from './items/items.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemsDetailsComponent } from './items/items-details/items-details.component';
import { AItemComponent } from './items/items-list/a-item/a-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ItemEditComponent } from './items/item-edit/item-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ItemCartService } from './shared/item-cart.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { ItemsService } from './items/items.service';
import { SignupFinishComponent } from './auth/signup-finish/signup-finish.component';
import { NewItemComponent } from './items/items-list/new-item/new-item.component';
import { AuthGuard } from './auth/auth-guard.service';
import { CollectionsComponent } from './collections/collections.component';
import { DmcaComponent } from './dmca/dmca.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemsComponent,
    ItemsListComponent,
    ItemsDetailsComponent,
    AItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    ItemEditComponent,
    DropdownDirective,
    SignupComponent,
    SigninComponent,
    SignupFinishComponent,
    NewItemComponent,
    CollectionsComponent,
    DmcaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [Title, ItemCartService, ItemsService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

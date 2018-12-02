import { Component, OnInit } from '@angular/core';
import { itemInCart } from './itemInCart.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  itemsInCart: itemInCart[];
  constructor() {
    
    this.itemsInCart =[
      new itemInCart('Shoes', 4, 2),
      new itemInCart('Socks', 3, 5)
    ];
  }

  ngOnInit() {
  }

}

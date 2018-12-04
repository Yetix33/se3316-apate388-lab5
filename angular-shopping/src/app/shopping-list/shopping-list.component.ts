import { Component, OnInit } from '@angular/core';
import { itemInCart } from './itemInCart.model';
import {ItemCartService} from '../shared/item-cart.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  itemCart: itemInCart[];
  constructor(private itemcartService: ItemCartService) {
    
  }
  
  
  
  ngOnInit() {
    this.itemCart = this.itemcartService.itemCart;

  }
  
  
  increase(index: number){
    this.itemCart[index].amount += 1;
    console.log("up");
  }
  decrease(index: number){
    this.itemCart[index].amount -= 1;
    console.log("down");
  }

}

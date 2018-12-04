import { Injectable } from '@angular/core';
import { itemInCart } from '../shopping-list/itemInCart.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemCartService {
  public itemCart : itemInCart[] = [new itemInCart('Shoes', 4, 2),
      new itemInCart('Socks', 3, 5)];
  
  ItemAdded: Subject<itemInCart> = new Subject<itemInCart>();

  constructor() { 
    this.ItemAdded.subscribe((value) =>{
      this.itemCart.push(value);
      console.log(value);
    });
  }
    getItem(id: number){
      return this.itemCart[id];
    }
    
    addItem(item: itemInCart) {
      this.ItemAdded.next(item);
      
    }
  
}

import { Injectable} from '@angular/core';
import {Item} from './item.model';
import {ItemCartService} from '../shared/item-cart.service';
import {itemInCart} from '../shopping-list/itemInCart.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  public items: Item[] = [new Item(
    "Shoes", "adidas running shoes", 'https://media.gq.com/photos/5824d723a9546c3d51932187/3:2/w_640/adidas-ultraboost-triple-black-release-01-1200x800%20(1).jpg', 12.55, 3
    ),
    new Item("Cars", "this is a vary fast car", "https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/wp-content/uploads/2017/05/Huracan_Performante_orange_097-626x383.jpg", 1000000, 1)
    
    ];
  constructor(private itemcartService: ItemCartService) { 
    this.items[0].comments.push("very nice");
    
    
  }
  
  getItem(id: number){
    return this.items[id];
  }
  addItemtoCart(item: itemInCart){
    this.itemcartService.addItem(item);
  }
  
}

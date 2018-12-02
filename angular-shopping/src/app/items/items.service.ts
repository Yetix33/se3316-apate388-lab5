import { Injectable, EventEmitter} from '@angular/core';
import {Item} from './item.model';
@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  itemSelected = new EventEmitter<Item>();
  public items: Item[] = [new Item(
    "Shoes", "adidas running shoes", 'https://media.gq.com/photos/5824d723a9546c3d51932187/3:2/w_640/adidas-ultraboost-triple-black-release-01-1200x800%20(1).jpg', 12.55, 3
    )];
  constructor() { }
  getItem(id: number){
    return this.items[id];
  }
  
}

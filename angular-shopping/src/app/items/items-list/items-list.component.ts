import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  items: Item[] = [new Item(
    "Shoes", "adidas running shoes", 'https://media.gq.com/photos/5824d723a9546c3d51932187/3:2/w_640/adidas-ultraboost-triple-black-release-01-1200x800%20(1).jpg', 12.55, 3
    )];
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
import {ItemsService} from './items.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  providers:[ItemsService]
})
export class ItemsComponent implements OnInit {
  selectedItem: Item;
  
  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.itemsService.itemSelected
      .subscribe(
        (item: Item) => {
          this.selectedItem =item;
          
        }
        
        )
  }

}

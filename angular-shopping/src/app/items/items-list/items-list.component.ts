import { Component, OnInit,} from '@angular/core';
import { Item } from '../item.model';
import {ItemsService} from '../items.service'
@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  
  items: Item[];
  constructor(private itemsService : ItemsService) { }

  ngOnInit() {
    this.items = this.itemsService.items;
  }
  
 
}

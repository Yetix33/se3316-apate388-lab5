import { Component, OnInit,Input, } from '@angular/core';
import { Item } from '../../item.model'
import {ItemsService} from '../../items.service'


@Component({
  selector: 'app-a-item',
  templateUrl: './a-item.component.html',
  styleUrls: ['./a-item.component.css']
})
export class AItemComponent implements OnInit {
  @Input() item: Item;
  @Input() index: number;
  
  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
  }
  
  
}

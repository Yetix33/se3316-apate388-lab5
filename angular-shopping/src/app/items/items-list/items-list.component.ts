import { Component, OnInit,} from '@angular/core';
import { Item } from '../item.model';
import {ItemsService} from '../items.service'
import{ Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  
  items: Item[];
  constructor(private itemsService : ItemsService,
              private router : Router,
              private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.items = this.itemsService.items;
  }
  onNewItem(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }
 
}

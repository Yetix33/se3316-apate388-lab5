import { Component, OnInit,} from '@angular/core';
import { Item } from '../item.model';
import {ItemsService} from '../items.service'
import{ Router, ActivatedRoute } from '@angular/router';
import {DataStorageService} from '../../shared/data-storage.service';
import {AuthService} from '../../auth/auth.service';
@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  
  items: Item[];
  constructor(private itemsService : ItemsService,
              private router : Router,
              private route: ActivatedRoute,
              private dataService: DataStorageService,
              private authService: AuthService) { 
  }

  ngOnInit() {
    this.dataService.getItems(this.OnResponse.bind(this));
  }
  OnResponse(){
    this.items = this.itemsService.items;
     console.log(this.items);
  }
  onNewItem(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }
 
}

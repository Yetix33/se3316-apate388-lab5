import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {CollectionService} from './collection.service';
import { Collection } from './collection.model';
import {DataStorageService} from '../shared/data-storage.service';
import {colItem} from './colItem.model';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})

export class CollectionsComponent implements OnInit {
  public show: boolean;
  public own: Collection[];
  public others: Collection[];
  public keys: string[];
  constructor(private dataService : DataStorageService) { 
    this.show = false;
  }

  ngOnInit() {
    this.dataService.getOwnCollections(this.OnResponse.bind(this))
  }
  OnResponse(collection, keys){
    this.own = collection;
    this.keys = keys;
    console.log(this.own);
  }
  
  showNew(){
    this.show = !this.show;
  }
  
  
    
  
  onSubmit(form : NgForm){
    const name = form.value.name;
    const desc = form.value.desc;
    const status = form.value.view;
    const itemName = form.value.itemname;
    const quantity = form.value.quantity;
    var temp = new Collection(name, desc, status)
    temp.itemsInCollection.push(new colItem(itemName, quantity));
    this.dataService.postCollection(temp);
    
  }
  
  
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {CollectionService} from './collection.service';
import { Collection } from './collection.model';
import {DataStorageService} from '../shared/data-storage.service';
@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
  public show: boolean;
  public own: Collection[];
  public others: Collection[];
  constructor(private dataService : DataStorageService) { 
    this.show = false;
  }

  ngOnInit() {
    this.dataService.getOwnCollections(this.OnResponse.bind(this))
  }
  OnResponse(collection){
    this.own = collection;
    console.log(this.own);
  }
  
  showNew(){
    this.show = !this.show;
  }
  onSubmit(form : NgForm){
    const name = form.value.name;
    const desc = form.value.desc;
    const status = form.value.view;
    this.dataService.postCollection(new Collection(name, desc, status));
    
  }
  
  
}

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ItemCartService } from './item-cart.service';
import { Item } from '../items/item.model';
import { Observable } from 'rxjs';
import { tap, map} from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import {AuthService} from '../auth/auth.service';
import { Collection } from '../collections/collection.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  private url = 'https://store-apate3883.firebaseio.com';
  
  
  constructor(private http: HttpClient,
              private itemsCartService: ItemCartService,
              private authService: AuthService) { }
  
  addNewItem (item : Item) {
    console.log(item);
    this.http.post(this.url+'/items.json', item )
    .subscribe(data =>{
      console.log(data);
      
    });
  }
  
  getItems(callback){
    this.http.get(this.url+'/items.json').subscribe(data =>{
    var dataset : any[];
    dataset = Object.keys(data).map((key) => { return data[key] });
    console.log(dataset);
    var newItems: Item[] = [];
    var keys: string[] = [];
    for (var i = 0; i < dataset.length ; i++) {
      var temp = new Item(dataset[i].name, dataset[i].details,  dataset[i].imagePath, dataset[i].price, dataset[i].stock);
      temp.comments = dataset[i].comments;
      temp.rating = dataset[i].rating;
      keys.push(Object.keys(data)[i]);     
      newItems.push(temp);
    }
    
      //console.log(data);
      callback(newItems, keys);
    });
    
  }
  updateItem(item : Item , key : string){
    this.http.put(this.url+ '/items/' + key + '.json', item).subscribe(data =>{
      console.log(data);
    });
    
  }
  
  deleteItem(key : string){
    this.http.delete(this.url + '/item/' + key + '.json').subscribe(err => console.log(err));
  }
  
  getOwnCollections(callback){
    this.http.get(this.url+ '/collections/'+this.authService.getID()+'.json').subscribe(data =>{
    var dataset : any[];
    dataset = Object.keys(data).map((key) => { return data[key] });
    console.log(dataset);
    var newCollection: Collection[] = [];
    var keys: string[] = [];
    for (var i = 0; i < dataset.length ; i++) {
      var temp = new Collection(dataset[i].name, dataset[i].desc,  dataset[i].status);
      temp.itemsInCollection = dataset[i].itemsInCollection;
      keys.push(Object.keys(data)[i])
      newCollection.push(temp);
    }
    
      //console.log(data);
      callback(newCollection, keys);
    });
  }
  
  postCollection(collection : Collection){
    console.log(collection);
    this.http.post(this.url+'/collections/'+ this.authService.getID() + '.json', collection)
    .subscribe(data =>{
      console.log(data);
      
    });
    
  }
  updateCollection(collection : Collection , key : string){
    this.http.put(this.url+ '/collection/' +this.authService.getID+ '/' + key + '.json', collection).subscribe(data =>{
      console.log(data);
    });
    
  }
  deleteCollection(key : string){
    this.http.delete(this.url + '/collection/' + this.authService.getID + '/' + key + '.json').subscribe(err => console.log(err));
  }
  
  
  
}

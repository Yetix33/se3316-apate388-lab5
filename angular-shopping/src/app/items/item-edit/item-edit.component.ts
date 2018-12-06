import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {ItemsService} from '../items.service';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../auth/auth.service';
import {DataStorageService} from '../../shared/data-storage.service';
import { Item } from '../item.model'
@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  id:number;
  item : Item;
  key : string;
  editMode = false;
  constructor(private route: ActivatedRoute,
              private itemsService : ItemsService,
              private dataService: DataStorageService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) =>{
        this.id =+ params['id'];
        this.editMode = params['id'] != null;
        this.item = this.itemsService.getItem(this.id);
        this.key = this.itemsService.keys[this.id];
        console.log(this.editMode);
      }
      )}
      
   onSubmit(form : NgForm){
    var item = new Item(form.value.name, form.value.details, form.value.imgpath, form.value.price, form.value.stock);
    this.dataService.updateItem(item, this.key );
    
  }

}

import { Component, OnInit } from '@angular/core';
import { Item } from '../../item.model';
import { DataStorageService } from '../../../shared/data-storage.service';
import { NgForm } from '@angular/forms';
 
@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  constructor(private storageService : DataStorageService) { }

  ngOnInit() {
  }
  onSubmit(form : NgForm){
    var item = new Item(form.value.name, form.value.details, form.value.imgpath, form.value.price, form.value.stock);
    this.storageService.addNewItem(item);
    
  }
}

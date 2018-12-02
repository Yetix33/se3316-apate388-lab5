import { Component, OnInit,Input, OUtput, EventEmitter } from '@angular/core';
import { Item } from '../../item.model'


@Component({
  selector: 'app-a-item',
  templateUrl: './a-item.component.html',
  styleUrls: ['./a-item.component.css']
})
export class AItemComponent implements OnInit {
  @Input() item: Item;
  @Output() addToCart = new EventEmitter<void>();
  
  constructor() { }

  ngOnInit() {
  }
  
  onSelected(){
    
  }

}

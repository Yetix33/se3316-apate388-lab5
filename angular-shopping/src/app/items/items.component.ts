import { Component, OnInit } from '@angular/core';

import {ItemsService} from './items.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  providers:[ItemsService]
})
export class ItemsComponent implements OnInit {
 
  
  constructor() { }

  ngOnInit() {
          
        }
        
        
  

}

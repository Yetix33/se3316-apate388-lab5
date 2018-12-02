import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Item } from '../item.model';
import {ItemsService} from '../items.service';
@Component({
  selector: 'app-items-details',
  templateUrl: './items-details.component.html',
  styleUrls: ['./items-details.component.css']
})
export class ItemsDetailsComponent implements OnInit {
 item: Item;
 id: number;
  constructor(private itemsService: ItemsService,
  private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id =+params['id'];
        this.item = this.itemsService.getItem(this.id);
      }
      );
  }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Item } from '../item.model';
import {ItemsService} from '../items.service';
import {ItemCartService} from '../../shared/item-cart.service'
import {itemInCart} from '../../shopping-list/itemInCart.model'
@Component({
  selector: 'app-items-details',
  templateUrl: './items-details.component.html',
  styleUrls: ['./items-details.component.css'],
  providers: [ItemCartService]
})
export class ItemsDetailsComponent implements OnInit {
 item: Item;
 id: number;
 comments: string[];
  constructor(private itemsService: ItemsService,
              private itemCartService: ItemCartService,
             private route: ActivatedRoute,
             private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id =+params['id'];
        this.item = this.itemsService.getItem(this.id);
        this.comments = this.item.comments;
        
      }
      );
  }
  
  onEditItem(){
    this.router.navigate(['edit'], {relativeTo: this.route});
    
  }
  onAddToCart(){
    var newitem = new itemInCart(this.item.name, this.item.price, 1);
    this.itemsService.addItemtoCart(newitem);
    
  }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { Item } from '../item.model';
import {ItemsService} from '../items.service';
import {ItemCartService} from '../../shared/item-cart.service'
import {itemInCart} from '../../shopping-list/itemInCart.model'
import {NgForm} from '@angular/forms';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-items-details',
  templateUrl: './items-details.component.html',
  styleUrls: ['./items-details.component.css'],
  providers: [ItemCartService]
})

export class ItemsDetailsComponent implements OnInit {
 item: Item;
 id: number;
 key: string;
 comments: string[];
 rating : number;
 ratings : number[];
  constructor(private itemsService: ItemsService,
              private itemCartService: ItemCartService,
             private route: ActivatedRoute,
             private router: Router,
             private authService: AuthService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id =+params['id'];
        this.item = this.itemsService.getItem(this.id);
        this.comments = this.item.comments;
        this.ratings = this.item.rating;
        for(var i = 0; i< this.comments.length; i++){
          this.comments[i] =this.ratings[i]+ " " + this.comments[i];
        }
        
        this.rating = this.item.getRating();
        this.key = this.itemsService.keys[this.id];
        console.log(this.rating);
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
  
  onComment(form : NgForm){
    const rating = form.value.rating;
    const comment = form.value.comment;
    this.itemsService.addComment(this.id, rating, comment);
  }

}

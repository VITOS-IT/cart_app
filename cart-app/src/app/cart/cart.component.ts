import { Component, Input, OnInit } from '@angular/core';
import { Bouquet } from 'src/models/bouquet';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
  cartItems:Bouquet[]
  constructor(private storeService:StoreService) {
    this.cartItems = storeService.getCartItems()
   }
  

  ngOnInit(): void {
  }

  getTotal():number{
    let total=0;
    this.cartItems.forEach(element => {
            total +=  element.quantity * element.price
    })
    return total
  }
}

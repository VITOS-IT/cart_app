import { Component, OnInit } from '@angular/core';
import { Bouquet } from 'src/models/bouquet';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  bouquet:Bouquet
  storeItems:Bouquet[]
  
  constructor(private storeService:StoreService) {
    this.bouquet = new Bouquet()
    this.storeItems = this.storeService.getStoreItems()
   }
   buyItem(item:Bouquet){
    
    this.storeService.updateStoreItem(item)
    
}

  ngOnInit(): void {
  }

}

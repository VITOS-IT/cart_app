import { Component, OnInit } from '@angular/core';
import { Bouquet } from 'src/models/bouquet';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-add-bouquet',
  templateUrl: './add-bouquet.component.html',
  styleUrls: ['./add-bouquet.component.css']
})
export class AddBouquetComponent implements OnInit {

  bouquet:Bouquet
 
  constructor(private storeService:StoreService) { 
    this.bouquet = new Bouquet()
   
  }

  register(){
    this.storeService.addToStore(this.bouquet)
         
    }
  ngOnInit(): void {
  }

}

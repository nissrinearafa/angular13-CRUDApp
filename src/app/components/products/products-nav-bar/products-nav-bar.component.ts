import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EventDriverService } from 'src/app/state/product.service';
import { ActionEvent, ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {
// @Output() producteventEmitter:EventEmitter<ActionEvent>=new EventEmitter();
  constructor(private eventDriverServer:EventDriverService) { }

  ngOnInit(): void {
  }
  onGetAllProducts(){
    //emettre un évenement
    //j'envoi un évenement vers le composant parent pour lui dire voila un évenement qui s'appel ALL_PRODUCTS
    //automatique le composant parent,il sait qu'ilya un évenement qu'a été émit s'appele ALL_products
    //{type:ProductActionsTypes.GET_ALL_PRODUCTS,payload:null}=envoyer objet
    //  this.producteventEmitter.emit({type:ProductActionsTypes.GET_ALL_PRODUCTS});
    this.eventDriverServer.publishEvent({type:ProductActionsTypes.GET_ALL_PRODUCTS});
  }
  onGetSelectedProducts(){
    //publier évenement
    this.eventDriverServer.publishEvent({type:ProductActionsTypes.GET_SELECTED_PRODUCTS});


  }
  onGetAvailabeProducts(){
     this.eventDriverServer.publishEvent({type:ProductActionsTypes.GET_AVAILABLE_PRODUCTS});

  }
  onNewProducts(){
     this.eventDriverServer.publishEvent({type:ProductActionsTypes.NEW_PRODUCT});

  }
  onSearch(dataForm:any){
     this.eventDriverServer.publishEvent({type:ProductActionsTypes.SEARCH_PRODUCTS,payload:dataForm});

  }
}

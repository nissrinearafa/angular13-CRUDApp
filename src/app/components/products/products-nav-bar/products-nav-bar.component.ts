import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActionEvent, ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {
 @Output() producteventEmitter:EventEmitter<ActionEvent>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onGetAllProducts(){
    //emettre un évenement
    //j'envoi un évenement vers le composant parent pour lui dire voila un évenement qui s'appel ALL_PRODUCTS
    //automatique le composant parent,il sait qu'ilya un évenement qu'a été émit s'appele ALL_products
    //{type:ProductActionsTypes.GET_ALL_PRODUCTS,payload:null}=envoyer objet
    console.log("hello");
    this.producteventEmitter.emit({type:ProductActionsTypes.GET_ALL_PRODUCTS});
    console.log("fin");
  }
  onGetSelectedProducts(){
    this.producteventEmitter.emit({type:ProductActionsTypes.GET_SELECTED_PRODUCTS});

  }
  onGetAvailabeProducts(){
    this.producteventEmitter.emit({type:ProductActionsTypes.GET_AVAILABLE_PRODUCTS});

  }
  onNewProducts(){
    this.producteventEmitter.emit({type:ProductActionsTypes.NEW_PRODUCT});

  }
  onSearch(dataForm:any){
    this.producteventEmitter.emit({type:ProductActionsTypes.SEARCH_PRODUCTS,payload:dataForm});

  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes } from 'src/app/state/product.state';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  //le composant parent doit transmettre la liste de produits au  composant fil liste-product
 //le cpomposantt fil recoit la list de produite depuis le composant parent

  @Input()  productsInput$:Observable<AppDataState<Product[]>>|null=null;
   @Output() productsEventEmitter:EventEmitter<ActionEvent>=new EventEmitter();
  readonly DataStateEnum=DataStateEnum;

  constructor() { }

  ngOnInit(): void {
  }

    onEditProduct(p:Product){
      this.productsEventEmitter.emit({type:ProductActionsTypes.EDIT_PRODUCT,payload:p})

   }
    onDelete(p:Product){
    this.productsEventEmitter.emit({type:ProductActionsTypes.DELET_PRODUCT,payload:p})

    }
    onSelect(p:Product){
     this.productsEventEmitter.emit({type:ProductActionsTypes.SELECT_PRODUCT,payload:p})
   }
   onActionEvent($event:ActionEvent){
this.productsEventEmitter.emit($event);
   }
}

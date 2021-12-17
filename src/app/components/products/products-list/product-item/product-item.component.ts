import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ActionEvent, ProductActionsTypes } from 'src/app/state/product.state';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
@Input() pr:Product|null=null;
@Output() eventEmiter:EventEmitter<ActionEvent>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onEditProduct(p:Product){
    this.eventEmiter.emit({type:ProductActionsTypes.EDIT_PRODUCT,payload:p})

 }
  onDelete(p:Product){
  this.eventEmiter.emit({type:ProductActionsTypes.DELET_PRODUCT,payload:p})

  }
  onSelect(p:Product){
   this.eventEmiter.emit({type:ProductActionsTypes.SELECT_PRODUCT,payload:p})
 }
 onActionEvent($event:ActionEvent){

 }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { EventDriverService } from 'src/app/state/product.service';
import { ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
 productId?:number;
 form: FormGroup = new FormGroup({
  id: new FormControl(),
  name: new FormControl(''),
 price: new FormControl(0),
 quantity: new FormControl(0),
 selected: new FormControl(true),
 available: new FormControl(true),

});
 submitted:boolean=false;
  constructor(
    private eventDriverServer:EventDriverService,
    private activatedRoute:ActivatedRoute,private productService:ProductsService,
    private fb:FormBuilder) {

    this.productId=activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.productService.getProduct(this.productId!).subscribe(
     product=>{
     this.form=  this.fb.group({
      id:[product.id,Validators.required],

         name:[product.name,Validators.required],
         price:[product.price,Validators.required],
         quantity:[product.quantity,Validators.required],
         selected:[product.selected,Validators.required],
         available:[product.available,Validators.required]
       })
     }
    )
  }
  get f() {
    return this.form.controls;
  }
  onUpdateProduct(){
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    this.productService.updateProduct(this.form.value).subscribe(
      data=>{
        alert("success product update");
        this.eventDriverServer.publishEvent({type:ProductActionsTypes.UPDATE_PRODUCT});

      }
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  form: FormGroup = new FormGroup({
     name: new FormControl(''),
    price: new FormControl(0),
    quantity: new FormControl(0),
    selected: new FormControl(true),
    available: new FormControl(true),

  });
  submitted:boolean=false;
  constructor(private fb:FormBuilder,private productService:ProductsService) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      name:["",Validators.required],
      price:[0,Validators.required],
      quantity:[0,Validators.required],
      selected:[true,Validators.required],
      available:[true,Validators.required],




    });
  }
  get f() {
    return this.form.controls;
  }
  onSaveProduct(){
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
this.productService.save(this.form.value)
.subscribe(data=>{
  alert("Success saving products");
})
;
  }
}

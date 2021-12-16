import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { AppDataState, DataStateEnum } from 'src/app/state/product.state';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
//méthode1
//  products:Product[] |null=null;
//méthode 2
//on met $ pour indiquer que c'un variable observale=c-à-d vous allez besoin de faire subscribe pour pouvoire récupérer les données s'ils arrivent
//products$:Observable<Product[]>|null=null;
 //methode 2 avec gestion errors
 products$:Observable<AppDataState<Product[]>>|null=null;
readonly DataStateEnum=DataStateEnum;
constructor(private productService:ProductsService ,private router:Router) { }

  ngOnInit(): void {
  }
  onGetAllProducts(){

    console.log("start");
//méthod2
//this.products$=this.productService.getAllProducts();
//méthode 2 et pour la getions des erreur en apoute pip
this.products$=this.productService.getAllProducts()
.pipe(
  //,map s'appele opérateur ,recoit data,et data est une liste de produits,je vais retourner un objet qui contient data,et ajouter un attribut dataState dans lequel le peux mettre un valeur,par exemple quand je recoit la donnée,je peux mettre la constante LOADED,on met les parenthesesparceque on retourne une fonction
  //startwith oérateur qui va retourner quelquechose au début de la requete,quant je fait un pipe,i va envoyer quelque avant avant meme que la requete envoyé
  map(data=>
    {
      console.log(data);
   return ({dataState:DataStateEnum.LOADED,data:data})}),

  startWith({dataState:DataStateEnum.LOADING}),
catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
  )
;

//méthode1
  //   this.productService.getAllProducts().subscribe(data=>{
  //     this.products=data;
  //   },err=>{
  //     console.log(err);
  //   }

  //   )
  }

  onGetSelectedProducts(){
    console.log("selected");

    this.products$=this.productService.getSelectedProducts()
.pipe(
    map(data=>{
      console.log(data);
     return ({dataState:DataStateEnum.LOADED,data:data}) }),



  startWith({dataState:DataStateEnum.LOADING}),
catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
  )
;
  }
  onGetAvailabeProducts(){
    console.log("selected");

    this.products$=this.productService.getAvailableProducts()
.pipe(
    map(data=>{
      console.log(data);
     return ({dataState:DataStateEnum.LOADED,data:data}) }),



  startWith({dataState:DataStateEnum.LOADING}),
catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
  )
;
  }
  onSearch(dataForm:any){
    console.log("selected");

    this.products$=this.productService.SsearchProducts(dataForm.keyword)
.pipe(
    map(data=>{
      console.log(data);
     return ({dataState:DataStateEnum.LOADED,data:data}) }),



  startWith({dataState:DataStateEnum.LOADING}),
catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
  )
;
  }
  onSelect(p:Product){
     this.productService.select(p)
     .subscribe(data=>{
       p.selected=data.selected;
     })
  }
  onDelete(p:Product){
    let v=confirm("are you sure");
    if(v==true)
    this.productService.delete(p).subscribe(
      data=>{
        this.onGetAllProducts();
      }
    )
  }
  onNewProducts(){
this.router.navigateByUrl("/newProduct");
  }
  onEditProduct(p:Product ){

this.router.navigateByUrl("/editProduct/"+p.id);
  }
}

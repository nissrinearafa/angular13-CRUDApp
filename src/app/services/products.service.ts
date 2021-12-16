import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

getAllProducts():Observable<Product[]>{
  let host=environment.host;
  return this.http.
  get<Product[]>(host+"/products");
}

getSelectedProducts():Observable<Product[]>{
  let host=environment.host;
  return this.http.
  get<Product[]>(host+"/products?selected=true");
}
getAvailableProducts():Observable<Product[]>{
  let host=environment.host;
  return this.http.
  get<Product[]>(host+"/products?available=true");
}
SsearchProducts(keyword:string):Observable<Product[]>{
  let host=environment.host;
  return this.http.
  get<Product[]>(host+"/products?name_like="+keyword);
}

select(p:Product):Observable<Product>{
  let host=environment.host;
  p.selected=!p.selected;
  return this.http.
 put<Product>(host+"/products/"+p.id,p);
}
delete(p:Product):Observable<void>{
  let host=environment.host;

  return this.http.
delete<void>(host+"/products/"+p.id);
}
save(p:Product):Observable<Product>{
  let host=environment.host;

  return this.http.
 post<Product>(host+"/products",p);
}
getProduct(id:number):Observable<Product>{
  let host=environment.host;
  return this.http.
  get<Product>(host+"/products/"+id);
}
updateProduct(p:Product):Observable<Product>{
  let host=environment.host;
  return this.http.
  put<Product>(host+"/products/"+p.id,p);
}
}

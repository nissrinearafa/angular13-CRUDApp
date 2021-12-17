import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import{HttpClientModule} from '@angular/common/http';
import { ProductsComponent } from './components/products/products.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { ProductItemComponent } from './components/products/products-list/product-item/product-item.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductsNavBarComponent } from './components/products/products-nav-bar/products-nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatistiquesComponent } from './components/statistiques/statistiques.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ProductsComponent,
    EditProductComponent,
    NewProductComponent,
    ProductItemComponent,
    ProductsListComponent,
    ProductsNavBarComponent,
    StatistiquesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export enum ProductActionsTypes{
  //[Product]évenement concerne objet product
  GET_ALL_PRODUCTS="[Product] Get All products",
  GET_SELECTED_PRODUCTS="[Product] Get Selected products",
  GET_AVAILABLE_PRODUCTS="[Product] Get Available products",
   SEARCH_PRODUCTS="[Product] Search products",
   NEW_PRODUCT="[Product] New product",
   SELECT_PRODUCT="[Product] SELECT product",
  EDIT_PRODUCT="[Product] Edit product",
  DELET_PRODUCT="[Product] Delete product"


  }
export interface ActionEvent{
  type:ProductActionsTypes,
  payload?:any
}
export enum DataStateEnum{
  LOADING,
  LOADED,
  ERROR
}
export interface AppDataState<T>{
dataState?:DataStateEnum,
data?:T,
errorMessage?:string

}

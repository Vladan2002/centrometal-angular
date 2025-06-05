export interface Section {
  name: string;
  param: number;
  color: string;
  icon: string;
  gte:number;
  limit: number;
  cards: Product[];
  loaded: boolean;

}


export interface Product {
  id: number;
  name: string;
  discount: number;
  subcategory_id:number;
  price: number;
  picture?: Picture[];
}

export interface Picture {
  product_id: number;
  url: string;
}

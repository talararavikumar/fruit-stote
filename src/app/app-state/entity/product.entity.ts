export interface Product {
  name: string;
  price: number;
  description: string;
  image: string;
  quantity:number
}

export interface cartItem extends Product{
  qty:number
}
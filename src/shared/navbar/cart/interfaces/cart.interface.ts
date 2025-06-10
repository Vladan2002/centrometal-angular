import { Product } from '../../../../app/index/components/main-content/products/interfaces/products.interface'

export interface CartItem {
  product: Product;
  quantity: number;
}

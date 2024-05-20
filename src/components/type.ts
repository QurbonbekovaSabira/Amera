export interface ProductVarientType {
  id: number;
  is_available: boolean;
  title: string;
  images: {
    image: string;
    image_id: number;
  }[];
  product: number;
  attribute_value: number[];
  other_detail: string;
  price: string;
  price_with_discount: null;
  quantity: number;
  userCount?: number;
}

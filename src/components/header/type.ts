export interface categoryData {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    id: number;
    title: string;
    image: string;
    parent: {
      id: number;
      title: string;
    };
    children: {
      id: number;
      title: string;
      image: string;
    }[];
  }[];
}

export interface TypeCategory {
  data: {
    id: number;
    title: string;
    image: string;
    children: {
      id: number;
      title: string;
      image: string;
    }[];
  }[];
}

export interface ProductType {
  results: {
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
  }[];
  count: number;
  next: null;
  previous: null;
}

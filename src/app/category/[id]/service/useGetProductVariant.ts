import React from "react";

export interface Type {
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
}
import { ProductType } from "@/components/header/type";
export const useGetProductVariant = async (id: string) => {
  try {
    const res = await fetch(
      `http://135.181.108.207/product_variant/?product__category=${id}`,
      {
        next: {
          revalidate: 300,
        },
      }
    );
    const data: ProductType = await res.json();
    return data;
  } catch (error) {
    throw new Error("Error from getting data");
  }
};

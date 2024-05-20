import React from "react";
import { url } from "@/components/header/service/useGetCategories";
import { ProductType } from "@/components/header/type";

export const useGetProductVariant = async (
  limit: number = 1,
  offset: number = 1
) => {
  try {
    const res = await fetch(
      `http://135.181.108.207/product_variant/?limit=${limit}&page=${offset}`,
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

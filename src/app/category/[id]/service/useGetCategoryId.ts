"use server";
import { url } from "@/components/header/service/useGetCategories";
export interface CategoryIdType {
  id: number;
  title: string;
  image: string;
  attributes: {
    id: number;
    title: string;
    values: {
      id: number;
      value: string;
    }[];
  }[];
  children: {
    id: number;
    title: string;
    image: string;
  }[];
  parent: {
    id: number;
    title: string;
  };
}
[];
export const useGetCategoryId = async (id: string | null = null) => {
  try {
    const res = await fetch(`${url}/category/${id}/`, {
      next: {
        revalidate: 300,
      },
    });
    const data: CategoryIdType = await res.json();
    return data;
  } catch (error) {
    throw new Error("Error from getting data");
  }
};

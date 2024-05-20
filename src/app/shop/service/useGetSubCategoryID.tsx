import { url } from "@/components/header/service/useGetCategories";


export const useGetSubCategoryID = async (id: number = 2181) => {
  try {
    const res = await fetch(`http://135.181.108.207/category/${id}/`, {
      next: {
        revalidate: 300,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Error from getting data");
  }
};

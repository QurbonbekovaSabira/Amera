import { url } from "../components/header/service/useGetCategories";
export const useGetSubcategory = async () => {
  try {
    const res = await fetch(`${url}/api/subcategory/`, {
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

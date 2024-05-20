import { ProductType } from "@/components/header/type";
const url = process.env.VITE_URL;

export const GetTvSale = async (limit: number = 5, offset: number = 1) => {
  try {
    const res = await fetch(
      `${url}/product_variant/?limit=${limit}&offset=${offset}`
    );
    const data: ProductType = await res.json();
    return data;
  } catch (error) {
    throw new Error("Error from getting data");
  }
};

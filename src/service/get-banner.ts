"use server";

const url = process.env.VITE_URL;
interface Type {
  results: {
    created_at: string;
    updated_at: string;
    image: string;
    title: string;
    description: string;
    id: number;
  }[];
  count: number | null;
  next: null;
  previous: null;
}
export const GetBannerData = async () => {
  try {
    const res = await fetch(`${url}/banner/`);
    const data: Type = await res.json();
    return data;
  } catch (error) {
    throw new Error("Error from getting data");
  }
};

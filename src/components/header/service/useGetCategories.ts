interface categoryData {
  count: number;
  next: null;
  previous: null;
  results: {
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
export const url = process.env.VITE_URL;

export async function useGetCatrgories() {
  try {
    const res = await fetch(`http://135.181.108.207/category/`, {
      next: {
        revalidate: 300,
      },
    });
    const data: categoryData = await res.json();
    return data;
  } catch (error) {
    throw new Error("Error from getting data");
  }
}

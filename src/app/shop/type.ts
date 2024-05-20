export interface SubCategoryType {
    id: number;
    title: string;
    image: string;
    parent: {
      id: number;
      title: string;
    };
    children: null;
    attributes: {
      id: number;
      title: string;
      values: {
        id: number;
        value: string;
      }[];
    }[];
  }
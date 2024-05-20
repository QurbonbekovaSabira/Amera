import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../lib/storage";
import { PayloadAction } from "@reduxjs/toolkit";
import { ProductVarientType } from "@/components/type";
export interface PropsTypes {
  attribute_value: number[];
  id: number;
  images: {
    image: string;
    image_id: number;
  }[];
  is_available: boolean;
  other_detail: string | null;
  price: string;
  price_with_discount: null;
  product: number;
  quantity: number;
  title: string;
  userCount: number;
  userPrice: number;
}

interface StateProps {
  products: PropsTypes[];
  count: number;
  totalPrice: number;
}

const initialState: StateProps = loadState("product") || {
  products: [],
  count: 0,
  totalPrice: 0,
};

const productReduser = createSlice({
  name: "productReduser",
  initialState,
  reducers: {
    addProduct: (
      state: StateProps,
      action: PayloadAction<ProductVarientType>
    ) => {
      const idf = state.products?.find((i) => i.id === action.payload.id);

      if (!idf) {
        return {
          ...state,
          products: [
            ...state.products,
            {
              ...action.payload,
              userCount: action.payload.userCount
                ? action.payload.userCount
                : 1,
              userPrice: parseInt(action.payload.price),
            },
          ],
        };
      }
    },

    removeProduct: (
      state: StateProps,
      action: PayloadAction<{ id: number }>
    ) => {
      const newProducts = state.products.filter(
        (i) => i.id !== action.payload.id
      );

      return { ...state, products: newProducts };
    },

    toggleAmount: (
      state: StateProps,
      action: PayloadAction<{ type: string; id: number }>
    ) => {
      if (action.payload.type === "inc") {
        const tempProducts = state.products.map((item) => {
          const price = Number(item.price);
          if (item.id === action.payload.id) {
            return {
              ...item,
              userCount: item.userCount && item.userCount + 1,
              userPrice: (item.userCount + 1) * price,
            };
          }
          return item;
        });
        return { ...state, products: tempProducts };
      }
      if (action.payload.type === "dec") {
        const tempProducts = state.products.map((item) => {
          const price = Number(item.price);

          if (item.id === action.payload.id) {
            return {
              ...item,
              userCount: item.userCount && item.userCount - 1,
              userPrice: (item.userCount - 1) * price,
            };
          }
          return item;
        });
        return { ...state, products: tempProducts };
      }
    },

    setCount: (state: StateProps) => {
      return {
        ...state,
        count: state.products.length,
      };
    },

    totalPrice: (state: StateProps) => {
      return {
        ...state,
        totalPrice: state.products.reduce((a, b) => a + b.userPrice, 0),
      };
    },
    removeAll: () => {
      return {
        products: [],
        count: 0,
        totalPrice: 0,
      };
    },
  },
});

export default productReduser.reducer;

export const {
  addProduct,
  removeProduct,
  removeAll,
  setCount,
  toggleAmount,
  totalPrice,
} = productReduser.actions;

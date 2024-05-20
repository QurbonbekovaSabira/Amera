import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../lib/storage";
import { PayloadAction } from "@reduxjs/toolkit";
import { ProductVarientType } from "@/components/type";

interface PropsTypes {
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
  like: PropsTypes[];
}

const initialState = loadState("like") || {
  like: [],
};

const LikeReducer = createSlice({
  name: "likeReducer",
  initialState,
  reducers: {
    addLike: (state: StateProps, action: PayloadAction<ProductVarientType>) => {
      const idf = state.like?.find((i) => i.id === action.payload.id);
      if (!idf) {
        return {
          ...state,
          like: [
            ...state.like,
            {
              ...action.payload,
            },
          ],
        };
      }
    },
    removeLike: (state: StateProps, action: PayloadAction<{ id: number }>) => {
      state.like = state.like.filter((i) => i.id !== action.payload.id);
    },
  },
});

export default LikeReducer.reducer;
export const { addLike, removeLike } = LikeReducer.actions;

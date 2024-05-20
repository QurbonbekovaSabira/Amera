import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/product-reducer";
import { saveState } from "./storage";
import likeReducer from "@/redux/like-reducer";
import {
  removeProduct,
  addProduct,
  toggleAmount,
  totalPrice,
  removeAll,
} from "../redux/product-reducer";

const storageMiddleware = createListenerMiddleware();

storageMiddleware.startListening({
  matcher: isAnyOf(addProduct, removeProduct, removeAll, toggleAmount),
  effect: (_, api) => {
    api.dispatch(totalPrice());
  },
});

export const store = configureStore({
  reducer: {
    product: productReducer,
    like: likeReducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().prepend(storageMiddleware.middleware),
});

store.subscribe(() => {
  saveState("product", store.getState().product);
  saveState("like", store.getState().like);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import products from "./features/products/productsSlice";
import common from "./features/common/commonSlice";
export const store = configureStore({
  reducer: {
    products,
    common,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

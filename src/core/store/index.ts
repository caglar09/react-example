import { configureStore, StateFromReducersMapObject } from "@reduxjs/toolkit";
import { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { api } from "./api/api";
import { PostSlice } from "features/posts/store";

const middleware = (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware);

const reducer = {
  [api.reducerPath]: api.reducer,
  [PostSlice.name]: PostSlice.reducer,
};

const store = configureStore({
  reducer,
  middleware,
  devTools: true, // production da false olacak
});

export type RootState = StateFromReducersMapObject<typeof reducer>;

export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = AppStore["dispatch"];

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;

export { api };

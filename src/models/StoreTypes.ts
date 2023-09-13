import { TypedUseSelectorHook } from "react-redux";
import { store } from "../redux/store";
import { IConeType } from "./ConeTypes";

export interface IInitialStore {
  cone: IConeType;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppSelector = TypedUseSelectorHook<RootState>;
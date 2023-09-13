import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AppSelector } from "../models/StoreTypes";

export const useAppSelector: AppSelector = useSelector;
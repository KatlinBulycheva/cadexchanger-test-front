import { configureStore } from "@reduxjs/toolkit";
import { initState } from "./initState";
import { coneReduser } from "./slices/coneSlice";

export const store = configureStore({
    preloadedState: initState,
    reducer: {
        cone: coneReduser,
    },
});
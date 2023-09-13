import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initState } from "../initState";
import { IConeType } from "../../models/ConeTypes";
import { RootState } from "../../models/StoreTypes";

const coneSlice = createSlice({
    name: 'searchValue',
    initialState: initState.cone,
    reducers: {
        setValues(_, action: PayloadAction<IConeType>) {
            return action.payload
        }
    }
})

export const {setValues} = coneSlice.actions;
export const coneReduser = coneSlice.reducer;
export const coneSelector = (state: RootState) => state.cone;
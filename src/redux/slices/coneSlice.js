import { createSlice } from "@reduxjs/toolkit";
import { initState } from "../initState";

const coneSlice = createSlice({
    name: 'searchValue',
    initialState: initState.cone,
    reducers: {
        setValues(_, action) {
            return action.payload
        }
    }
})

export const {setValues} = coneSlice.actions;
export const coneReduser = coneSlice.reducer;
export const coneSelector = (state) => state.cone;
import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { isHidden: false};

const cartShowHideSlice = createSlice({
    name: "cartVisible",
    initialState: initialCartState,
    reducers: {
        activateVisibility(state) {
            state.isHidden = !state.isHidden;
        }
    }
});

export const cartVisibleActions = cartShowHideSlice.actions;

export default cartShowHideSlice;
import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { isHidden: false, notification: null};

const cartShowHideSlice = createSlice({
    name: "cartVisible",
    initialState: initialCartState,
    reducers: {
        activateVisibility(state) {
            state.isHidden = !state.isHidden;
        },
        showNotification(state,action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
});

export const cartVisibleActions = cartShowHideSlice.actions;

export default cartShowHideSlice;
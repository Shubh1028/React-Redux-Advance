import { configureStore } from "@reduxjs/toolkit";
import cartShowHideSlice from "./cartShowHideSlice";
import cartSlice from "./cartSlice";



const store = configureStore({
    reducer: {
        cartVisible: cartShowHideSlice.reducer,  
        cart: cartSlice.reducer
    }
});

export default store;
import { configureStore } from "@reduxjs/toolkit";
import cartShowHideSlice from "./cartShowHideSlice";



const store = configureStore({
    reducer: {
        cartVisible: cartShowHideSlice.reducer,  
    }
});

export default store;
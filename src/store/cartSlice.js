import { createSlice } from "@reduxjs/toolkit";
import { cartVisibleActions } from "./cartShowHideSlice";



const initialCartItemState = {items: [], totalQuantity: 0}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartItemState,
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItemTocart(state,action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id)
            state.totalQuantity++;
            if(!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                })
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
            }
        },
        removeItemFromCart(state,action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id)
            state.totalQuantity--;
            if(existingItem.quantity === 1 ){
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price
            }
        }
    }

})

export const sendCartData = (cart) => {
    return async (dispatch) => {
        await dispatch(cartVisibleActions.showNotification({
            sttaus: "pending",
            title: "Sending..",
            message: "Sending cart data",
        }));

        const sendRequest = async () => {
            const res = await fetch(`https://react-redux-cart-67738-default-rtdb.firebaseio.com/cart.json`, {
                method: "PUT",
                body: JSON.stringify(cart)
            });
            if (!res.ok) {
                throw new Error('Sending cart data failed!');
            }
        };
        try {
            await sendRequest();
            dispatch(cartVisibleActions.showNotification({
                status: "success",
                title: "Success..",
                message: "Sent successfully",
            }));
        }
        catch (err) {
            dispatch(cartVisibleActions.showNotification({
                status: "error",
                title: "Error!",
                message: "Sending cart data failed!",
            }));
        }

    }
};

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const res = await fetch(`https://react-redux-cart-67738-default-rtdb.firebaseio.com/cart.json`);
            if (!res.ok) {
                throw new Error("Something went wrong!");
            }
            const data = await res.json();
            return data;
        }
        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart(cartData));
        }
        catch (err) {

        }
    }
}

export const cartActions = cartSlice.actions;

export default cartSlice;
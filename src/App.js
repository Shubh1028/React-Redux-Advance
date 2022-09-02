import { Fragment } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from "react-redux";
import {cartVisibleActions} from '../src/store/cartShowHideSlice'
import { useEffect } from 'react';
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from "./store/cartSlice";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cartVisible = useSelector((state) => state.cartVisible.isHidden);
  const cart = useSelector((state)=> state.cart);
  const notification = useSelector(state => state.cartVisible.notification)
  

  // useEffect(() => {
  //   const sendCartData = async () => {
  //     dispatch(cartVisibleActions.showNotification({
  //       status: 'pending',
  //       title: 'Sending...',
  //       message: 'Sending Cart Data!!'
  //     }))
  //   const response = await  fetch('https://react-redux-cart-67738-default-rtdb.firebaseio.com/cart.json', {
  //     method: 'PUT',
  //     body: JSON.stringify(cart),
  //   })
  //   dispatch(cartVisibleActions.showNotification({
  //     status: 'success',
  //     title: 'Success',
  //     message: 'Cart Data Sent Succesfully'
  //   }))
  //   }

  //   if(isInitial) {
  //     isInitial = false;
  //     return;
  //   }
  //   sendCartData().catch(error => {
  //     dispatch(cartVisibleActions.showNotification({
  //       status: 'error',
  //       title: 'Error',
  //       message: 'Cart Data Sending Failed'
  //     }))
  //   })
  // }, [cart, dispatch]);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);


  useEffect(() => {
    if (isInitial === true) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);
  
  return (
    <Fragment>
      {notification && <Notification status = {notification.status} title={notification.title} message={notification.message}/>}
    <Layout>
     {cartVisible && <Cart /> }
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;

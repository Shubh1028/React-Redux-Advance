import classes from './CartButton.module.css';
import { useDispatch, useSelector } from "react-redux";
import {cartVisibleActions} from '../../store/cartShowHideSlice'


const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity)

  const cartShowHideHandler = () => {
    dispatch(cartVisibleActions.activateVisibility())
  }



  return (
    <button className={classes.button} onClick={cartShowHideHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;

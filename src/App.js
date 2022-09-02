import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from "react-redux";
import {cartVisibleActions} from '../src/store/cartShowHideSlice'

function App() {
  const cartVisible = useSelector((state) => state.cartVisible.isHidden);
  
  return (
    <Layout>
     {cartVisible && <Cart /> }
      <Products />
    </Layout>
  );
}

export default App;

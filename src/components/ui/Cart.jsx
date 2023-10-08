import { useGlobalContext } from '../../context/context';
import { cartItemsList } from '../../data/cartItemsList';
import Wrapper from './Wrappers/CartWrapper';

const Cart = () => {
  const { cart } = useGlobalContext();
  console.log(cart);
  return <div>cart</div>;
};

export default Cart;

import { useGlobalContext } from '../../context/context';
import { cartItemsList } from '../../data/cartItemsList';
import Wrapper from './Wrappers/CartWrapper';

const Cart = () => {
  const { listOfItems, changeCartItemAmount } = useGlobalContext();
  const id = listOfItems[0].id;
  console.log(listOfItems);

  return (
    <div>
      <button onClick={() => changeCartItemAmount(id)}>click</button>
    </div>
  );
};

export default Cart;

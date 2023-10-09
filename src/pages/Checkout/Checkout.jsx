import { Link } from 'react-router-dom';
import { Cart } from '../../components/ui';
import Wrapper from './Wrapper/CheckoutWrapper';

const Checkout = () => {
  return (
    <Wrapper>
      <Cart />
    </Wrapper>
  );
};

export default Checkout;

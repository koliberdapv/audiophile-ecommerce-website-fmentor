import { Link } from 'react-router-dom';
import { Cart } from '../../components/ui';
import Wrapper from './Wrapper/CheckoutWrapper';

const Checkout = () => {
  return (
    <Wrapper>
      <Cart isCheckoutPage={true} />
    </Wrapper>
  );
};

export default Checkout;

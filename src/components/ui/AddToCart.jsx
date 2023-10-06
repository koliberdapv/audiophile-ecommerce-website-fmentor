import { useState } from 'react';
import { ColorButton, Counter } from '../buttons';
import Wrapper from './Wrappers/AddToCartWrapper';

const AddToCart = ({ product }) => {
  const { price } = product;
  const [amount, setAmount] = useState(1);
  return (
    <Wrapper>
      <h6 className="price | flex">
        $<span>{price}</span>
      </h6>
      <div className="buttons | grid">
        <Counter amount={amount} setAmount={setAmount} />
        <ColorButton isAddToCart={true} amount={amount} product={product} />
      </div>
    </Wrapper>
  );
};

export default AddToCart;

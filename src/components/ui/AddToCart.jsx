import { useEffect, useState } from 'react';
import { ColorButton, Counter } from '../buttons';
import Wrapper from './Wrappers/AddToCartWrapper';
import { formatPrice } from '../../utils';

const AddToCart = ({ product }) => {
  const { price, amountInStock, id } = product;
  const [amount, setAmount] = useState(1);
  const increase = () => {
    if (amount > amountInStock) return;
    setAmount((prev) => prev + 1);
  };
  const decrease = () => {
    if (amount <= 1) return;
    setAmount((prev) => prev - 1);
  };
  useEffect(() => {
    setAmount(1);
  }, [id]);
  return (
    <Wrapper>
      <h6 className="price | flex">
        $<span>{formatPrice(price)}</span>
      </h6>
      <div className="buttons | grid">
        <Counter amount={amount} increase={increase} decrease={decrease} />
        <ColorButton isAddToCart={true} amount={amount} product={product} />
      </div>
    </Wrapper>
  );
};

export default AddToCart;

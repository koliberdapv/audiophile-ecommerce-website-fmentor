import { formatPrice } from '../../utils';
import Wrapper from './Wrappers/CartItemWrapper';
const CartItem = ({ item }) => {
  const { image, price, name, amount, id, info } = item;
  return (
    <Wrapper>
      <div className="container | flex">
        <figure className="image-container">
          <img src={image} alt={name} />
        </figure>
        <div className="info | grid">
          <p className="product-name">{name}</p>
          <div className="bold-opacity | flex">
            $ <span>{formatPrice(price)}</span>
          </div>
        </div>
        <div className="amount | bold-opacity">x{amount}</div>
      </div>
    </Wrapper>
  );
};

export default CartItem;

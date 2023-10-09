import { useGlobalContext } from '../../context/context';
import CartItem from './CartItem';
import Wrapper from './Wrappers/CartWrapper';
import { formatPrice } from '../../utils';

const Cart = () => {
  const { cart } = useGlobalContext();
  return (
    <Wrapper>
      <div className="width-controller">
        <div className="content-container | grid">
          <h6 className="title">summary</h6>
          <ul className="items-list | grid">
            {cart.map((item, index) => {
              return <CartItem key={index} item={item} />;
            })}
          </ul>
          <section className="fee-info | grid">
            <div className="fee-item | flex">
              <p className="fee-title">total</p>
              <div>
                $ <span>{formatPrice(5396)}</span>
              </div>
            </div>
            <div className="fee-item | flex">
              <p className="fee-title">shipping</p>
              <div>
                $ <span>{formatPrice(50)}</span>
              </div>
            </div>
            <div className="fee-item | flex">
              <p className="fee-title">vat (included)</p>
              <div>
                $ <span>{formatPrice(1079)}</span>
              </div>
            </div>
            <div className="fee-item | flex">
              <p className="fee-title">grand total</p>
              <div>
                $ <span>{formatPrice(5446)}</span>
              </div>
            </div>
          </section>
          <button className="cart-btn">
            <p className="subtitle">continue & pay</p>
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cart;

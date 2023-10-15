import { useGlobalContext } from '../../context/context';
import CartItem from './CartItem';
import Wrapper from './Wrappers/CartWrapper';
import { formatPrice } from '../../utils';
import { Link } from 'react-router-dom';

const Cart = ({ isCheckoutPage, isGlobalModule }) => {
	const {
		cart,
		VAT,
		shipping,
		totalItems,
		totalAmount,
		clearCart,
		toggleCartOpen,
		numberOfItems,
	} = useGlobalContext();

	if (cart.length < 1) {
		return (
			<Wrapper>
				<div className="width-controller ">
					<div className="content-container | grid">
						<header className="empty-cart | grid">
							<h6>Your cart is empty</h6>
							<p>Let's fill it in!</p>
							<Link
								className="cart-btn | grid"
								to="/"
								onClick={toggleCartOpen}
							>
								<p className="subtitle">see our products</p>
							</Link>
						</header>
					</div>
				</div>
			</Wrapper>
		);
	}

	return (
		<Wrapper className="cart-modal-wrapper">
			<div className={isCheckoutPage ? 'width-controller' : ''}>
				<div className="content-container | grid">
					{isCheckoutPage && <h6 className="title">summary</h6>}
					{isGlobalModule && (
						<header className="cart-header | flex justify-space">
							<h6 className="title">
								cart
								<span>({numberOfItems})</span>
							</h6>
							<button
								className="clear-cart-btn"
								onClick={clearCart}
							>
								<p>Remove all</p>
							</button>
						</header>
					)}
					<ul className="items-list | grid">
						{cart.map((item, index) => {
							return (
								<CartItem
									key={index}
									item={item}
									isCheckoutPage={isCheckoutPage}
									isGlobalModule={isGlobalModule}
								/>
							);
						})}
					</ul>
					<section className="fee-info | grid">
						<div className="fee-item | flex">
							<p className="fee-title">total</p>
							<div>
								$ <span>{formatPrice(totalAmount)}</span>
							</div>
						</div>
						{isCheckoutPage && (
							<>
								<div className="fee-item | flex">
									<p className="fee-title">shipping</p>
									<div>
										$ <span>{formatPrice(shipping)}</span>
									</div>
								</div>
								<div className="fee-item | flex">
									<p className="fee-title">vat (included)</p>
									<div>
										$ <span>{formatPrice(VAT.toFixed(0))}</span>
									</div>
								</div>
								<div className="fee-item | flex grand-total">
									<p className="fee-title">grand total</p>
									<div>
										$ <span>{formatPrice(totalAmount + shipping)}</span>
									</div>
								</div>
							</>
						)}
					</section>
					{isCheckoutPage && (
						<button className="cart-btn">
							<p className="subtitle">continue & pay</p>
						</button>
					)}
					{isGlobalModule && (
						<Link
							className="cart-btn | grid"
							to="checkout"
							onClick={toggleCartOpen}
						>
							<p className="subtitle">checkout</p>
						</Link>
					)}
				</div>
			</div>
		</Wrapper>
	);
};

export default Cart;

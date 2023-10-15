import { toast } from 'react-toastify';
import { useGlobalContext } from '../../context/context';
import { formatPrice } from '../../utils';
import { Counter } from '../buttons';
import Wrapper from './Wrappers/CartItemWrapper';
const CartItem = ({ item, isCheckoutPage, isGlobalModule }) => {
	const { image, price, name, amount, id, info } = item;
	const { toggleAmount, removeItem } = useGlobalContext();
	const increase = () => {
		toggleAmount(id, 'increase');
	};
	const decrease = (amount) => {
		if (amount === 1) {
			removeItem(id);
			toast.success('Item removed!', { position: toast.POSITION.TOP_CENTER });
			return;
		}
		toggleAmount(id, 'decrease');
	};

	return (
		<Wrapper>
			<div className="container | flex">
				<figure className="image-container">
					<img
						src={image}
						alt={name}
					/>
				</figure>
				<div className="info | grid">
					<p className="product-name">{name}</p>
					<div className="bold-opacity | flex">
						$ <span>{formatPrice(price)}</span>
					</div>
				</div>
				{isCheckoutPage && (
					<div className="amount | bold-opacity">x{amount}</div>
				)}
				{isGlobalModule && (
					<Counter
						increase={increase}
						decrease={decrease}
						amount={amount}
						isCartCounter={true}
					/>
				)}
			</div>
		</Wrapper>
	);
};

export default CartItem;

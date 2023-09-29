import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useReducer } from 'react';
import { cartItemsList } from '../../data/features/cart/cartItemsList';
import Wrapper from './Wrappers/CartWrapper';
import { getCartItems } from '../../data/features/cart/cartSlice';
// import { getCartItems } from '../../data/features/cart/cartSlice';

const Cart = () => {
	const {
		isLoading,
		numberOfItems,
		priceTotal,
		shipping,
		VAT,
		grandTotal,
		listOfItems,
	} = useSelector((store) => store.cartSlice);
	const dispatch = useDispatch();
	// console.log(isLoading);

	return (
		<div>
			<button onClick={() => dispatch(getCartItems(50000))}>click</button>
			<button onClick={() => console.log(isLoading)}>log</button>
		</div>
	);
};

export default Cart;

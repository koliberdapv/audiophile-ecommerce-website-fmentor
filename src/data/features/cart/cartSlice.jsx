import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { cartItemsList } from './cartItemsList';

const localStorageCart = JSON.parse(localStorage.getItem('cart')) || undefined;
const {
	numberOfItems: numberOfItemsLocal,
	priceTotal: priceTotalLocal,
	shipping: shippingTotalLocal,
	VAT: VATLocal,
	grandTotal: grandTotalLocal,
	listOfItems: listOfItemsLocal,
} = localStorageCart;

const initialState = {
	isLoading: false,
	isCartOpen: false,
	numberOfItems: numberOfItemsLocal || 0,
	priceTotal: priceTotalLocal || 0,
	shipping: shippingTotalLocal || 0,
	VAT: VATLocal || 0,
	grandTotal: grandTotalLocal || 0,
	listOfItems: listOfItemsLocal || [],
};

const cartSlice = createSlice({
	name: 'cartSlice',
	initialState,
	reducers: {
		getCartItems: (state, { payload }) => {
			// localStorage.setItem('cart', JSON.stringify(initialState));
			// console.log(initialState);
			state.priceTotal = payload;
		},
	},
});

export const { getCartItems } = cartSlice.actions;

export default cartSlice.reducer;

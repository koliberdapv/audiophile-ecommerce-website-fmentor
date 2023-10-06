import { useContext, createContext, useState, useReducer } from 'react';
import reducer from './reducer';
import { productList } from '../data/product_list';
import { CHANGE_CART_ITEM_AMOUNT, ADD_TO_CART } from './actions';

const AppContext = createContext();

const initialState = {
	cart: [],
	totalItems: 0,
	totalAmount: 0,
	shipping: 0,
	VAT: 0,
};

export const AppProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [state, dispatch] = useReducer(reducer, initialState);

	const adjustShadowHeight = () => {
		const shadow = document.getElementById('sidebar-shadow');
		const shadowHeight = document.body.getBoundingClientRect().height - 84;
		shadow.style.height = `${shadowHeight}px`;
	};

	const toggleSidebarOpen = () => {
		console.log('click');
		if (isSidebarOpen) {
			setIsSidebarOpen(false);
		}
		if (!isSidebarOpen) {
			setIsSidebarOpen(true);
			setTimeout(() => {
				adjustShadowHeight();
			}, 100);
		}
	};

	const addToCart = ({ id, amount, product }) => {
		dispatch({ type: ADD_TO_CART, payload: { id, amount, product } });
	};

	return (
		<AppContext.Provider
			value={{
				...state,
				isCartOpen,
				isSidebarOpen,
				adjustShadowHeight,
				toggleSidebarOpen,
				addToCart,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
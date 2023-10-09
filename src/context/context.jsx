import {
  useContext,
  createContext,
  useState,
  useReducer,
  useEffect,
} from 'react';
import reducer from './reducer';
import { productList } from '../data/product_list';
import { CHANGE_CART_ITEM_AMOUNT, ADD_TO_CART } from './actions';

const AppContext = createContext();

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart');
  if (cart) return JSON.parse(localStorage.getItem('cart'));
  else return [];
};

const initialState = {
  cart: getLocalStorage(),
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

  const removeItem = (id) => {};

  const toggleAmount = (id, value) => {};

  const clearCart = () => {};

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        isCartOpen,
        isSidebarOpen,
        adjustShadowHeight,
        toggleSidebarOpen,
        addToCart,
        toggleAmount,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

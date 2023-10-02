import { useContext, createContext, useState, useReducer } from 'react';
import reducer from './reducer';
import { productList } from '../data/product_list';
import { CHANGE_CART_ITEM_AMOUNT } from './actions';

const AppContext = createContext();

const cartItemsList = productList.map((product, index) => {
  const { id, name, image, price, amountInStock } = product;
  let cartName = name;
  if (name === 'XX99-Mark-II') {
    cartName = 'XX99 MK II';
  }
  if (name === 'XX99-Mark-I') {
    cartName = 'XX99 MK I';
  }
  return { id, cartName, image, price, amountInStock, amountInCart: 0 };
});

const initialState = {
  numberOfCartItems: 0,
  priceTotal: 0,
  shipping: 0,
  VAT: 0,
  grandTotal: 0,
  listOfItems: cartItemsList,
};

const localState = JSON.parse(localStorage.getItem('cart'));

export const AppProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [state, dispatch] = useReducer(reducer, localState || initialState);

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

  const changeCartItemAmount = (id) => {
    dispatch({ type: CHANGE_CART_ITEM_AMOUNT, payload: { id } });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        isCartOpen,
        isSidebarOpen,
        adjustShadowHeight,
        toggleSidebarOpen,
        changeCartItemAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

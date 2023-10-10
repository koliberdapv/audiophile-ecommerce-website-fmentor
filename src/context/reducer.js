import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from './actions';

const reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, amount, product } = action.payload;
    const tempItem = state.cart.find((item) => item.id === id);
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id) {
          let newAmount = cartItem.amount + amount;
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }
          return { ...cartItem, amount: newAmount };
        } else return cartItem;
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id,
        name: product.name,
        amount,
        image: product.image,
        price: product.price,
        max: product.amountInStock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  if (action.type === REMOVE_ITEM) {
    console.log('remove item started');
    const tempCart = state.cart.filter((item) => item.id !== action.payload.id);
    return { ...state, cart: tempCart };
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (value === 'increase') {
          let newAmount = item.amount + 1;
          if (newAmount > item.max) {
            newAmount = item.max;
          }
          return { ...item, amount: newAmount };
        }
        if (value === 'decrease') {
          let newAmount = item.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...item, amount: newAmount };
        }
      } else {
        return item;
      }
    });
    return { ...state, cart: tempCart };
  }

  throw new Error(`no matching action type : ${action.type}`);
};
export default reducer;

import { ADD_TO_CART } from './actions';

const reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, amount, product } = action.payload;
    const tempItem = state.cart.find((item) => item.id === id);
    console.log(product);
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
  throw new Error(`no matching action type : ${action.type}`);
};
export default reducer;

import { CHANGE_CART_ITEM_AMOUNT } from './actions';

const reducer = (state, action) => {
  if (action.type === CHANGE_CART_ITEM_AMOUNT) {
    const { id } = action.payload;
    const { numberOfCartItems, shipping, VAT, grandTotal, listOfItems } = state;
    let newList = listOfItems.filter((item) => item.id === id);
    newList[0].amountInCart = newList[0].amountInCart + 1;
    // console.log(newList);
    return { ...state, listOfItems: [...listOfItems, newList[0]] };
  }
  throw new Error(`no matching action type : ${action.type}`);
};
export default reducer;

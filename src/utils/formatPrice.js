function formatPrice(amount) {
  return isNaN(amount)
    ? ''
    : amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
export default formatPrice;

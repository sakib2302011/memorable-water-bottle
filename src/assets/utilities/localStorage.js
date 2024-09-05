const getStoredCart = () => {
  const cart = localStorage.getItem('cart');
  if(cart && cart.length){
    return JSON.parse(cart);
  }
  return [];
};
const saveCartToLS = cart => {
  const stringifiedCart = JSON.stringify(cart);
  localStorage.setItem('cart', stringifiedCart);
}
const addToCart = id => {
  const cart = getStoredCart();
  cart.push(id);
  saveCartToLS(cart);
}
const  removeFromCart = id => {
  const cart =  getStoredCart();
  const newCart = cart.filter((ids)=> ids !== id);
  saveCartToLS(newCart);

}

export {getStoredCart, addToCart, removeFromCart};
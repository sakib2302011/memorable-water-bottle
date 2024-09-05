import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
  return (
    <div>
      <h2>Bottles in Cart: {cart.length} </h2>
      <div className="cart-container">
        {
          cart.map(bottle => <div key={bottle.id}>
            <img src={bottle.img} alt={`Image of ${bottle.name}`} />
            <button onClick={()=>handleRemoveFromCart(bottle.id)}>Remove</button>
          </div> )
        }
      </div>
    </div>
  );
};

export default Cart;
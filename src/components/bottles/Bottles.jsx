import { useEffect, useState } from "react";
import Bottle from "../bottle/Bottle";
import './Bottles.css';
import Cart from "../cart/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('bottles.json')
      .then(res => res.json())
      .then(data => setBottles(data));
  }, []);

  const handleAddToCart = (bottle) => {
    // Check if bottle is already in cart to avoid duplicates
    if (!cart.find(item => item.id === bottle.id)) {
      setCart(prevCart => [...prevCart, bottle]);
    }
  };

  const handleRemoveFromCart = id => {
    const newCart = cart.filter(bottle => bottle.id !== id);
    setCart(newCart);
  };

  return (
    <div>
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
      
      <div className="bottles-container">
        {bottles.map(bottle => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={() => handleAddToCart(bottle)}
          />
        ))}
      </div>
    </div>
  );
};

export default Bottles;

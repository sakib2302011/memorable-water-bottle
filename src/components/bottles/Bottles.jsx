import { useEffect, useState } from "react";
import Bottle from "../bottle/Bottle";
import './Bottles.css';
import Cart from "../cart/Cart";
import {getStoredCart, addToCart, removeFromCart} from "../../assets/utilities/localStorage"

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('bottles.json')
      .then(res => res.json())
      .then(data => setBottles(data));
  }, []);
  useEffect(()=> {
    if(bottles.length){
      const getCart = getStoredCart();
      const savedCart = [];
      for(const id of getCart){
        const bottle = bottles.find(bottle => bottle.id === id);
        if(bottle){
          savedCart.push(bottle);
        }
      }
      setCart(savedCart);
    }
  }, [bottles])

  const handleAddToCart = (bottle) => {
    // Check if bottle is already in cart to avoid duplicates
    if (!cart.find(item => item.id === bottle.id)) {
      setCart(prevCart => [...prevCart, bottle]);
      addToCart(bottle.id);
    }
  };

  const handleRemoveFromCart = id => {
    const newCart = cart.filter(bottle => bottle.id !== id);
    setCart(newCart);
    removeFromCart(id);
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

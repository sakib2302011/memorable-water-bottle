import './Bottle.css'
const Bottle = ({bottle, handleAddToCart}) => {
  
  return (
    <div className="bottle-box">
      <h3>Bottle: {bottle.name} </h3>
      <img src={bottle.img} alt={`Image of ${bottle.name}`} />
      <h4>Price: ${bottle.price}.00</h4>
      <button onClick={()=>handleAddToCart(bottle)}>Add to Cart</button>
    </div>
  );
};

export default Bottle;
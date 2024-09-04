import './Bottle.css'
const Bottle = ({bottle}) => {
  console.log(bottle);
  return (
    <div className="bottle-box">
      <h3>Bottle: {bottle.name} </h3>
      <img src={bottle.img} alt="" />
      <h4>Price: ${bottle.price}.00</h4>
    </div>
  );
};

export default Bottle;
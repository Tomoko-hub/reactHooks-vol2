import React, { useState } from "react";

const App = props => {
  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);

  const reset = () => {
    setPrice(props.price)
    setName(props.name)
  }
 
  return (
    <>
      <p>{name}, {price}.</p>
      <button onClick={()=> setPrice(price +1) }>+1</button>
      <button onClick={()=> setPrice(price -1) }>-1</button>
      <button onClick={reset}>Reset</button>
      <input value={name} onChange={event => setName(event.target.value)}></input>
    </>
  );
}

App.defaultProps = {
  name:'Item name',
  price: 100
}

export default App;

import React, { useState } from "react";

const App = props => {
  const [state, setState] = useState(props);
  const {name, price} = state;
 
  return (
    <>
      <p>Your item is {name}, {price}€.</p>
      <button onClick={()=> setState({...state, price:price +1})}>+1</button>
      <button onClick={()=> setState({...state, price:price -1})}>-1</button>
      <button onClick={()=> setState(props)}>Reset</button>
      <input value={name} onChange={event => setState({...state, name: event.target.value})}></input>
    </>
  );
}

App.defaultProps = {
  name:'Item name',
  price: 100
}

export default App;

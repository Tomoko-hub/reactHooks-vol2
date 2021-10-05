import React, { useState } from "react";

function App() {

  const [ count, setCount ] = useState(0);

  const increment=()=> setCount(count + 1);

  const decrement = () => setCount(count - 1);

  const triple = () => setCount(count * 3);

  const reset = () => setCount(0);

  const n3 = () => setCount( previousCount => {
    if (previousCount % 3 === 0) {
      return previousCount/3
    } else {
      return previousCount
      // return previousCount % 3 === 0 ? previousCount/3 : previousCount
     }
  } );

  return (
    <>
      <div>
        <p>count: {count}</p>
        <button onClick={increment}>
          +1
        </button>
        <button onClick={decrement}>
          -1
        </button>
      </div>
      <div>
        <button onClick={triple}>
          x3
        </button>
        <button onClick={()=> setCount(count +1)}>increment2</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
      <div>
        <button onClick={n3}>3n</button>
      </div>
    </>
  );
}

export default App;

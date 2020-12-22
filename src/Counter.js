import React, { useState } from "react";

const Counter = () => {
    const [initCounter, setInitCounter] = useState(0);
    const [counter, setCounter] = useState(initCounter);

    const addCounter =() =>{
        setCounter(parseInt(counter) +1);
    }

    const minusCounter =()=>{
        setCounter (counter - 1);
    }

    const resetCounter=()=>{
        setCounter(0);
    }

    const handleChange = (event) =>{
        setInitCounter(event.target.value);
    }

    const initCount = () =>{
        setCounter(initCounter);
    }

    return (
        <div>
          <input
            placeholder="tape a value"
            value={initCounter}
            onChange={handleChange}
          />
          <button onClick={initCount}>Apply</button>
          <h2> {counter}</h2>
          <button onClick={addCounter}>PLUS </button>
          <button onClick={minusCounter}>MOINS </button>
          <button onClick={resetCounter}>RESET </button>
        </div>
      );
    };
    
    export default Counter;

import React, { useContext } from 'react';
import CounterContext from '../contexts/CounterContext';

const Counter = () => {
   const { counter } = useContext(CounterContext);

   return (
      <div>
         <p> {counter} </p>
         {/* <button
            onClick={() => setCounter(counter + 1)}>
            +1
         </button> */}
      </div>
   );
};

export default Counter;

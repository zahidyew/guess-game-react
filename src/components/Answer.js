import React, { useState, useContext } from 'react';
import CounterContext from '../contexts/CounterContext';

const Answer = () => {
   const [answer, setAnswer] = useState("");
   const { counter, setCounter } = useContext(CounterContext);

   const handleUserInput = (event) => {
      setAnswer(event.target.value);
   };

   const handleSubmit = (event) => {
      event.preventDefault();

      checkAnswer(answer);
      //console.log(answer);
   };

   const checkAnswer = (ans) => {
      const test = "cat";
      //if (ans === "") {}
      if (ans === test) {
         setCounter(counter + 1);
      } else {
         alert("Wrong answer.");
      }
   };

   return (
      <form onSubmit={handleSubmit}>
         <input
            type="text"
            name="answer"
            value={answer}
            onChange={handleUserInput}
         /> <br />
         <input type="submit" value="Submit" />
      </form>
   );
};

export default Answer;

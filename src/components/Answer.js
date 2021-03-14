import React, { useState, useContext } from 'react';
import CounterContext from '../contexts/CounterContext';
import ImageContext from '../contexts/ImageContext';

const Answer = () => {
   const [answer, setAnswer] = useState("");
   const { counter, setCounter } = useContext(CounterContext);
   const { image, setImage } = useContext(ImageContext);

   const handleUserInput = (event) => {
      setAnswer(event.target.value);
   };

   const handleSubmit = (event) => {
      event.preventDefault();

      checkAnswer(answer);
      //console.log(answer);
   };

   const checkAnswer = (ans) => {
      if (ans === image.name) {
         setCounter(counter + 1);
      } else {
         alert("Wrong answer.");
      }
      nextImage();
   };

   const nextImage = () => {
      setImage({
         url: "https://tinyurl.com/4u8a64t3",
         name: "dog"
      });
   };

   return (
      <form onSubmit={handleSubmit}>
         <input
            type="text"
            name="answer"
            value={answer}
            placeholder="write here"
            onChange={handleUserInput}
         /> <br />
         <input type="submit" value="Submit" />
      </form>
   );
};

export default Answer;

import React, { useState, useContext } from 'react';
import CounterContext from '../contexts/CounterContext';
import ImageContext from '../contexts/ImageContext';
import images from '../data/Images';

const Answer = () => {
   const [answer, setAnswer] = useState("");
   const { counter, setCounter } = useContext(CounterContext);
   const { image, setImage } = useContext(ImageContext);
   const [num, setNum] = useState(1);

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
      setAnswer("");
      nextImage();
   };

   const nextImage = () => {
      if (num < images.length) {
         setImage(images[num]);
         setNum(num + 1);
      } else {
         const submitBtn = document.getElementById("submitBtn");
         submitBtn.disabled = true;
      }
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
         <input id="submitBtn" type="submit" value="Submit" />
      </form>
   );
};

export default Answer;

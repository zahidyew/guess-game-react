import './App.css';
import { useState } from 'react';
import Counter from './components/Counter';
import CounterContext from './contexts/CounterContext';
import Answer from './components/Answer';
import { ImageHolder } from './components/ImageHolder';
import ImageContext from './contexts/ImageContext';

function App() {
  const imageObj = {
    url: "https://tinyurl.com/448pmyy6",
    name: "cat"
  };
  const [counter, setCounter] = useState(0);
  const [image, setImage] = useState(imageObj);
  //const value = useMemo(() => ({ counter, setCounter }), [counter, setCounter]);
  const value = ({ counter, setCounter });
  const imageValue = ({ image, setImage });

  return (
    <div className="App">
      <h1> Guess the picture </h1>
      <CounterContext.Provider value={value}>
        <Counter />
        <ImageContext.Provider value={imageValue}>
          <ImageHolder />
          <Answer />
        </ImageContext.Provider>
      </CounterContext.Provider>
    </div>
  );
}

export default App;

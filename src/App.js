import './App.css';
import { useState } from 'react';
import Counter from './components/Counter';
import CounterContext from './contexts/CounterContext';
import Answer from './components/Answer';
import { ImageHolder } from './components/ImageHolder';

function App() {
  const [counter, setCounter] = useState(0);
  //const value = useMemo(() => ({ counter, setCounter }), [counter, setCounter]);
  const value = ({ counter, setCounter });

  return (
    <CounterContext.Provider value={value}>
      <div className="App">
        <h1> Guess the picture </h1>
        <Counter />
        <ImageHolder />
        <Answer />
      </div>
    </CounterContext.Provider>
  );
}

export default App;

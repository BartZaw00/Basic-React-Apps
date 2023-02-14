import logo from '../../assets/logo.svg';
import './App.css';
import { useState } from 'react';

const PlusButton = (props) => {
  return (<button onClick={props.onClick}>+</button>)
}

const MinusButton = (props) => {
  return (<button onClick={props.onClick}>-</button>)
}

const Number = (props) => {
  return (<span>{props.number}</span>)
}

const App = () => {

  const [counter, setCounter] = useState(0);

  const handleButtonClick = (sign) => {
    if (sign === '+') {
      setCounter(counter + 1)
    }
    if (sign === '-') {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <PlusButton onClick={() => handleButtonClick('+')} />
      <Number number={counter} />
      <MinusButton onClick={() => handleButtonClick('-')} />
      <footer><a id="credits" href="https://github.com/BartZaw00" target="_blank">Created By <span>Bartosz
        Zawadka</span></a></footer>
    </>
  );
}

export default App;


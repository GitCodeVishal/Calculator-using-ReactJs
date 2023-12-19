import Display from "./Display";
import Buttons from "./Buttons";
import Signs from "./Signs";
import { useState } from "react";
import {evaluate} from 'mathjs';

function App() {

  const[input , setInput] = useState('0')

  const handleClick = (value) => {
  setInput((prevInput) => `${prevInput}${value}` )
  }

  const calculate = (input) =>{
  const result = evaluate(input);
  return setInput(result);
    
  }

  return (
    <div className="app">
     <Display input={input}/>
     <Signs handleClick={handleClick} setInput={setInput}/>
     <Buttons handleClick={handleClick} input={input} calculate={calculate}/>
    </div>
  );
}

export default App;

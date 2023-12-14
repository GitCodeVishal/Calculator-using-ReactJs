import Display from "./Display";
import Buttons from "./Buttons";
import Signs from "./Signs";
import { useState } from "react";
import {evaluate} from 'mathjs';

function App() {

  const[input , setInput] = useState('')

  const handleClick = (value) => {
  setInput((prevInput) => prevInput + value)
  }

  const calculate = (input) =>{
    const result = evaluate(input);
    return result;
  }

  return (
    <div className="App">
     <Display input={input}/>
     <Signs handleClick={handleClick}/>
     <Buttons handleClick={handleClick} input={input} calculate={calculate}/>
    </div>
  );
}

export default App;

import React from 'react'

const Buttons = ({handleClick,input,calculate}) => {
  return (
    <div className='buttons'>
        <div className='buttons_1'>
            <button onClick={()=>{handleClick(9)}}>9</button>
            <button onClick={()=>{handleClick(8)}}>8</button>
            <button onClick={()=>{handleClick(7)}}>7</button>
        </div>
        <div className='buttons_2'>
            <button onClick={()=>{handleClick(6)}}>6</button>
            <button onClick={()=>{handleClick(5)}}>5</button>
            <button onClick={()=>{handleClick(4)}}>4</button>
        </div>
        <div className='buttons_3'>
            <button onClick={()=>{handleClick(3)}}>3</button>
            <button onClick={()=>{handleClick(2)}}>2</button>
            <button onClick={()=>{handleClick(1)}}>1</button>
        </div>
        <div className='buttons_4'>
            <button onClick={()=>{handleClick(0)}}>0</button>
            <button onClick={()=>{handleClick('.')}}>.</button>
            <button onClick={()=>{calculate(input)}}>=</button>
        </div>
    </div>
  )
}

export default Buttons;
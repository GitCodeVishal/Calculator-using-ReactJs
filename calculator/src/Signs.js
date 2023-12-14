import React from 'react'

const Signs = ({handleClick}) => {
  return (
    <div className='Signs'>
        <button onClick={()=>{handleClick('/')}}>/</button>
        <button onClick={()=>{handleClick('x')}}>x</button>
        <button onClick={()=>{handleClick('-')}}>-</button>
        <button onClick={()=>{handleClick('+')}}>+</button>
        <button>DEL</button>
    </div>
  )
}

export default Signs;
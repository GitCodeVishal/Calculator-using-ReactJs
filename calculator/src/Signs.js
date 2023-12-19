import React from 'react'

const Signs = ({handleClick, setInput}) => {
  return (
    <div className='signs'>
        <button className='signs_plus' onClick={()=>{handleClick('/')}}>/</button>
        <button className='signs_plus' onClick={()=>{handleClick('*')}}>x</button>
        <button className='signs_plus' onClick={()=>{handleClick('-')}}>-</button>
        <button className='signs_plus' onClick={()=>{handleClick('+')}}>+</button>
        <button className='signs_plus' onClick={()=>setInput('0')}>DEL</button>
    </div>
  )
}

export default Signs;
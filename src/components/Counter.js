import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../feature/counter/counterSlice';


const Counter = () => {
  
  const count = useSelector((state) => state.counter.count )
  const dispatch = useDispatch();

  return (
    <div>
      <h4>Count: { count }</h4>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter

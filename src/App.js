//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount, decrementByAmount } from './redux/counter';

function App() {
  const counter = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Count: { counter }</h1>
      <button onClick={()=> dispatch(increment())}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
      <button onClick={()=> dispatch(incrementByAmount())}>+5</button>
      <button onClick={()=> dispatch(decrementByAmount())}>-5</button>
    </div>
  );
}

export default App;

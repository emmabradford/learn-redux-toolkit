//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from './redux/counter';
function App() {
  const {count} = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={()=> dispatch(increment())}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;

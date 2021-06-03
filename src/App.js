//import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [count, setCount ] = React.useState(0);
  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={()=> setCount(count +1)}>+</button>
      <button onClick={()=> setCount(count-1)}>-</button>
    </div>
  );
}

export default App;

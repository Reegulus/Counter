import React, { useState } from 'react';
import './App.css';

function App() {

    const [count, setCount] = useState(0)
    // const [reset, setReset] = useState(0)
    return (
    <div className="App">
      <header className="App-header">
          <p>{count}</p>
        <a onClick = {() => {setCount(count + 1)}}>click</a>
        <a onClick = {() => {setCount(0 ) }}>reset</a>
      </header>
    </div>
  );
}

export default App;

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [krok, setKrok] = useState(1)
  const [krokk, setKrokk] = useState(1)

  function add() {
    setCount(count + krok)
  }

  function reset(){
    setCount(0);
    setKrok(1);
    setKrokk(1);
  }

  function set(){
    setKrok(krokk);
  }
  return (
    <>
      <h1>Aplikacja licznika w ReactJS</h1>
      <div>
      <form action="">
        <p>licznik: <span>{count}</span></p>
        <button onClick={add} type="button">Add</button>
        <button onClick={set} type="button">set</button>
        <button onClick={reset} type="button">reset</button><br /><br />
        <span className="krok">Krok: </span>
        <input
        className='krok2'
          type="number"
          value={krokk}
          onChange={(e) => setKrokk(Number(e.target.value))}
          min="1"
        />
      </form>
      </div>
    </>
  )
}

export default App

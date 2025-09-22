import { useState } from 'react'
import './App.css'

// function ImieLabel({imie}){
//   return(
//     <div>
//       <p>{imie}</p>
//     </div>
//   )
// }

function App() {
  const [imie, setImie] = useState("")

   const clickHandle = (imieP) => {
    setImie(imieP);
    console.log(imie);
   }

  return (
    <>
   <h1>User's List</h1>
   <form>
    <input type="text" id="imie" />
    <button onClick={() => clickHandle("bob")}>Add user</button> <br />
   </form>
    </>
  )
}

export default App

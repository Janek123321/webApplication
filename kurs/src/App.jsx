import { useState } from 'react'
import './App.css'


const tab = [
  { id: 1, kurs: "Programowanie w C#" },
  { id: 2, kurs: "Angular dla początkujących" },
  { id: 3, kurs: "Kurs Django" }
]



function App() {
  const [inputName, setinputName] = useState("");
  const [inputNumber, setinputNumber] = useState('');


  const listItems = tab.map(tab =>
    <li key={tab.id}>
      {tab.kurs}
    </li>
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputName);

    const kursId = parseInt(inputNumber);
    const wybranyKurs = tab.find(k => k.id === kursId);

if (wybranyKurs) {
  console.log(wybranyKurs.kurs);
} else {
  console.log("Nie znaleziono kursu o podanym ID.");
}

  }

  return (
    <>
      <h2>Liczba kursów: {tab.length}</h2>

      <ol>
        {listItems}
      </ol>

      <form onSubmit={handleSubmit} className='form-group'>
        
          <label htmlFor="imie" for="imie" >Imię i nazwisko</label><br />
          <input type="text" className="form-control" value={inputName} onChange={(e) => setinputName(e.target.value)} id="imie" /><br />
        
        <label htmlFor="nrKurs">Numer kursu</label><br />
        <input type="number" className="form-control" id="nrKurs" value={inputNumber} onChange={(e) => setinputNumber(e.target.value)}/><br />

        <button type="submit" className='btn btn-primary' id="button">Zapisz do kursu</button>


      </form>
    </>
  )
}

export default App

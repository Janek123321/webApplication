import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Info({ user, course }) {
  return (
    <>
      <h4>Użytkownik: {user}</h4>
      <h4>Wybrał kurs: {course}</h4>
    </>
  );
}
function App() {
  const [user, setUser] = useState("");
  const [courseNumber, setCourseNumber] = useState("");
  //wartosc kazdego pola modyfikowanego przez usera (imput) ma byc stanem
  const [course, setCourse] = useState("");
  //ten jest dlatego bo jeswt potrzebny
  const tablicaKursow = ["c#", "angular", "django", "react"];
  const lista = tablicaKursow.map((element, index) => <li key={index}>{element}</li>);
  function infoCourse(event) {
    setCourseNumber(event.target.value);
    if (event.target.value > 0 && event.target.value <= tablicaKursow.length) {
      setCourse(tablicaKursow[event.target.value - 1]);
    } else {
      setCourse("Nieprawidłowy numer kursu");
    }
  }
  return (
    <>
      <h2>Liczba kursów: {tablicaKursow.length}</h2>
      <ol>
        {lista}
      </ol>
      <form className="form-group">
        <label>Imię i nazwisko</label><br />
        <input
          type="text"
          value={user}
          onChange={(event) => setUser(event.target.value)}//
          className="form-control"
        /><br />
        <label>Numer kursu</label><br />
        <input
          type="number"
          value={courseNumber}
          onChange={infoCourse}
          className="form-control"
        /><br />
      </form>
      {user && course && <Info user={user} course={course} />}
    </>
  )
}
export default App;
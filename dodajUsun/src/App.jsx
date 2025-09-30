import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Info({ user, deleteuser, index }) {
  return (
    <div className="user">
      {user} <button  className="zamknij" onClick={() => deleteuser(index)}>x</button>
    </div>
  );
}

function App() {
  const [user, setUser] = useState([]);

  const handleRemove = (index) => {
    setUser(prev => prev.filter((_, i) => i !== index));
  };

  function info(event) {
    event.preventDefault();
    const nameTaken = document.getElementById("imie").value;
    setUser(prev => [...prev, nameTaken])
  }

  return (
    <>
      <h1 className='blue'>User's list</h1> 
      <form onSubmit={info} className="d-flex align-items-center">
        <input
          className="form-control me-3"  // me-3 = margin-end (prawo)
          id="imie"
          type="text"
        />

        <button type="submit" className="btn btn-primary" >
          Add user
        </button>
      </form>


      {user.map((imie, index) => (
        <Info
          key={index}
          user={imie}
          deleteuser={handleRemove}
          index={index}
        />
      ))}
    </>
  )
}


export default App;
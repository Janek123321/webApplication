import './App.css'

function App() {
  function handleSubmit(event) {
    event.preventDefault();
    const tytulFilmu = document.getElementById("tytul").value;
    const rodzajFilmu = document.getElementById("rodzaj").value;
   
    console.log("Tytul: " +tytulFilmu + "; Rodzaj: " + rodzajFilmu);
    
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='form-group'>
        
          <label htmlFor="tutul">Tytuł fimy</label><br />
          <input type="text" className="form-control"  id="tytul" /><br />
        
          <label htmlFor="rodzaj">Rodzaj</label><br />
          <select id="rodzaj" className="form-control">
            <option value=""></option>
            <option value="1">Komedia</option>
            <option value="2">Obyczajowy</option>
            <option value="3">Sensacyjny</option>
            <option value="4">Horror</option>
          </select> <br />

        <button type="submit" className='btn btn-primary' id="button">Dodaj</button>
      </form>
    </>
  )
}

export default App

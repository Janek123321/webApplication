import { useState } from 'react'
import obraz1 from './assets/obraz1.jpg'
import obraz2 from './assets/obraz2.jpg'
import obraz3 from './assets/obraz3.jpg'
import obraz4 from './assets/obraz4.jpg'
import obraz5 from './assets/obraz5.jpg'
import obraz6 from './assets/obraz6.jpg'
import obraz7 from './assets/obraz7.jpg'
import obraz8 from './assets/obraz8.jpg'
import obraz9 from './assets/obraz9.jpg'
import obraz10 from './assets/obraz10.jpg'
import obraz11 from './assets/obraz11.jpg'
import obraz12 from './assets/obraz12.jpg'

import './App.css'

function Image({ imgName, imgAltName, downloadsNum, onDownload }) {
  return (
    <div className="imageComponent">
      <img src={imgName} alt={imgAltName} />
      <h4>Pobrań: {downloadsNum}</h4>
      <button onClick={onDownload}>Pobierz</button>
    </div>
  )
}

function App() {
  const [tab, setTab] = useState([
    { id: 0, alt: "Mak", filename: obraz1, category: 1, downloads: 35 },
    { id: 1, alt: "Bukiet", filename: obraz2, category: 1, downloads: 43 },
    { id: 2, alt: "Dalmatyńczyk", filename: obraz3, category: 2, downloads: 2 },
    { id: 3, alt: "Świnka morska", filename: obraz4, category: 2, downloads: 53 },
    { id: 4, alt: "Rotwailer", filename: obraz5, category: 2, downloads: 43 },
    { id: 5, alt: "Audi", filename: obraz6, category: 3, downloads: 11 },
    { id: 6, alt: "kotki", filename: obraz7, category: 2, downloads: 22 },
    { id: 7, alt: "Róża", filename: obraz8, category: 1, downloads: 33 },
    { id: 8, alt: "Świnka morska", filename: obraz9, category: 2, downloads: 123 },
    { id: 9, alt: "Foksterier", filename: obraz10, category: 2, downloads: 22 },
    { id: 10, alt: "Szczeniak", filename: obraz11, category: 2, downloads: 12 },
    { id: 11, alt: "Garbus", filename: obraz12, category: 3, downloads: 321 }
  ])

  // Przechowuj stany checkboxów
  const [filters, setFilters] = useState({
    1: true, // Kwiaty
    2: true, // Zwierzęta
    3: true, // Samochody
  })

  // Obsługa kliknięcia checkboxa
  const handleCheckboxChange = (category) => {
    setFilters(prev => ({
      ...prev,
      [category]: !prev[category]
    }))
  }

  // Obsługa kliknięcia "Pobierz"
  const downloadHandle = (numberToChange) => {
    setTab(prevTab =>
      prevTab.map((item, index) =>
        index === numberToChange
          ? { ...item, downloads: item.downloads + 1 }
          : item
      )
    )
  }

  // Filtrowanie zdjęć do wyświetlenia
  const filteredImages = tab.filter(item => filters[item.category] === true)

  return (
    <>
      <h1>Kategorie zdjęć</h1>
      <form className="switch-group">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="check1"
            checked={filters[1]}
            onChange={() => handleCheckboxChange(1)}
          />
          <label className="form-check-label" htmlFor="check1">Kwiaty</label>
        </div>

        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="check2"
            checked={filters[2]}
            onChange={() => handleCheckboxChange(2)}
          />
          <label className="form-check-label" htmlFor="check2">Zwierzęta</label>
        </div>

        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="check3"
            checked={filters[3]}
            onChange={() => handleCheckboxChange(3)}
          />
          <label className="form-check-label" htmlFor="check3">Samochody</label>
        </div>
      </form> 

      {filteredImages.map((item) => (
        <Image
          key={item.id}
          imgName={item.filename}
          imgAltName={item.alt}
          downloadsNum={item.downloads}
          cat={item.category}
          onDownload={() => downloadHandle(item.id)}
        />
      ))}
    </>
  )
}

export default App

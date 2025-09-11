import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

 function Tab(){
  const tab=[
    {id: 1, kurs: "Programowanie w C#"},
    {id: 2, kurs:"Angular dla początkujących"},
    {id: 3, kurs: "Kurs Django"}
  ]

  return(
    <>
    <span>{tab.size}</span>
    </>
  )
 }

function App() {

  return (
    <>
      <h2>Liczba kursów: <Tab /></h2>
    </>
  )
}

export default App

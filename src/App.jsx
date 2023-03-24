import { useState, useEffect } from 'react'
import { Imagenes } from './Imagenes';



function App() {

const [imagen, setimagen] = useState([])

const url = 'https://pokeapi.co/api/v2/pokemon';

const FetControl = (url) => {

fetch(url)
.then(response => response.json())
.then(data => {
  setimagen(data.results)

  });

}

useEffect(() => {

FetControl(url)

}, [])



  return (
    <div >
     <h1>Poket Api</h1>
     <Imagenes image={imagen}/>    
      
    </div>
  )
}

export default App

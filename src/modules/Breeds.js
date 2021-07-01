import React from 'react'

import { Link } from 'react-router-dom'


 const Breeds=({filterRaza,breedToShow,setBreedToShow})=> {
  
  
  
  if (filterRaza.length<10) 
    return (
    <div>
      <ul>
        {filterRaza.map(r=>
        <li key={r}>
          <Link to={`/breeds/${r}`}>
         {r}
         </Link>
         <button onClick={()=>{
           setBreedToShow(r)
          }  
           }>
          elegir raza
         </button>
        </li>
        )}
      </ul>
    </div>
     ) 
    return (
      <p>especificar busqueda</p>
    )
    }
    export default Breeds
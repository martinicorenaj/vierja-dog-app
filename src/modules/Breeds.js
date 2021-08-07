import React from 'react'
import { useDispatch } from 'react-redux'
import { setBreedToShow } from '../reducers/breedToShowReducer'
import { Link } from 'react-router-dom'


 const Breeds=({filterRaza})=> {
  
  const dispatch=useDispatch()
  
  
  if (filterRaza.length<10) 
    return (
    <div>
      <ul>
        {filterRaza.map(r=>
        <li key={r}>
          
         {r}
         
         <Link to={`/breeds/${r}`}>
         <button onClick={()=>{
           dispatch(setBreedToShow(r))
          }  
           }>
          elegir raza
         </button>
         </Link>
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
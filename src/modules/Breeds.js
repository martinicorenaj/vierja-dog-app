import React from 'react'

 const Breeds=({filterRaza,breedToShow,setBreedToShow})=> {
    if (filterRaza.length<10) 
    return (
    <div>
      <ul>
        {filterRaza.map(r=>
        <li key={r}>
         {r}
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
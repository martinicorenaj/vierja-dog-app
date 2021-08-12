import React from 'react'



import ItemList from './ItemList'

 const Breeds=({filterRaza})=> {
  
  
  
  
  if (filterRaza.length<10) 
    return (
    <div>
      <ul>
        {filterRaza.map(r=>
       
        <ItemList breed={r}/>
        )}
      </ul>
    </div>
     ) 
    return (
      <p>especificar busqueda</p>
    )
    }
    export default Breeds
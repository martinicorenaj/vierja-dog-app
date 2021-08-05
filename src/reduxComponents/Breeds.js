import React from 'react'
import { useDispatch } from 'react-redux'
import React, {useState, useEffect} from 'react'
import { setBreedToShow } from '../reducers/breedToShowReducer'
import { Link } from 'react-router-dom'


 const Breeds=()=> {
    const [breeds,setBreeds]=useState([])
    const showFilter=useSelector(state=>state.filter)
  
    const nombresRazas=Object.keys(breeds)

    const filterRaza=nombresRazas.filter(r=>r.includes(showFilter))

  useEffect (()=>{
    axios
         .get('https://dog.ceo/api/breeds/list/all')
         .then(response=>{
          setBreeds(response.data.message)
         })
  },[])
    const dispatch=useDispatch()
  
  

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
           dispatch(setBreedToShow(r))
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
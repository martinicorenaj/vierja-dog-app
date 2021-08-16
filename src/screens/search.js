import React, {useState, useEffect} from 'react'
import Breeds from '../modules/Breeds'
import FilterR from '../reduxComponents/FilterR'
import axios from 'axios'
import { useSelector } from 'react-redux'


const Search = () => {
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

    return <div>
        <FilterR />
        <Breeds filterRaza={filterRaza} />
    </div>
}

export default Search
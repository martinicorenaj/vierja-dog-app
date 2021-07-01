import React, {useState, useEffect} from 'react'
import Filter from '../modules/Filter'
import Breeds from '../modules/Breeds'
import axios from 'axios'

const Search = () => {
    const [breeds,setBreeds]=useState([])
    const [breedToShow, setBreedToShow]=useState('')
    const [showFilter, setShowFilter]=useState('')
  
    const handleSearchChange = (event)=>{
        setShowFilter(event.target.value)
    }

    // esto yo lo haria antes de hacer setBreeds, asi ya breeds te queda con
    // el formato que queres
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
        <Filter handleSearchChange={handleSearchChange} showFilter={showFilter}/>
        <Breeds filterRaza={filterRaza} breedToShow={breedToShow} setBreedToShow={setBreedToShow}/>
    </div>
}

export default Search
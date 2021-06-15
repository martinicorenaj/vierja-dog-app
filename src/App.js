import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Filter=({showFilter, handleSearchChange})=>
<div>
  <p>filtro de raza</p>
  <input value={showFilter}
         onChange={handleSearchChange}
  />
</div>

const Breeds=({filterRaza})=>
<div>
  <ul>
    {filterRaza.map(r=>
    <li key={r}>
     {r}
    </li>
    )}
  </ul>
</div>


const App = () => {
  const [breeds,setBreeds]=useState([])
  const [dogs, setDogs]=useState([])
  const [myTeam,setMyTeam]=useState([])
  const [showFilter, setShowFilter]=useState('')

  useEffect (()=>{
    axios
         .get('https://dog.ceo/api/breeds/list/all')
         .then(response=>{
          setBreeds(response.data.message)
         })
  },[])
console.log('render',breeds)
  
const nombresRazas=Object.keys(breeds)

const handleSearchChange = (event)=>{
  setShowFilter(event.target.value)
}
const filterRaza=nombresRazas.filter(r=>r.includes(showFilter))
  return (<div>
    <Filter handleSearchChange={handleSearchChange} showFilter={showFilter}/>
    <Breeds filterRaza={filterRaza}/>
  </div>
  )
}

export default App
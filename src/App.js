import React, {useState, useEffect} from 'react'
import Pagination from './components/Pagination'
import DisplayMyTeam from './modules/DisplayMyTeam'
import DogsByBreed from './modules/DogsByBreed'
import Filter from './modules/Filter'
import Breeds from './modules/Breeds'
import axios from 'axios'
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom'



const App = () => {
  const [breeds,setBreeds]=useState([])
  const [breedToShow, setBreedToShow]=useState('')
  const [dogs, setDogs]=useState([])
  const [myTeam,setMyTeam]=useState([])
  const [showFilter, setShowFilter]=useState('')
  const [breedPerPage]=useState(10)
  const [currentPage, setCurrentPage]=useState(1)
  

  useEffect (()=>{
    axios
         .get('https://dog.ceo/api/breeds/list/all')
         .then(response=>{
          setBreeds(response.data.message)
         })
  },[])

  useEffect (()=>{
   axios
         .get(`https://dog.ceo/api/breed/${breedToShow}/images`)
         .then(response=>{
           setDogs(response.data.message)
          console.log(`cargando raza ${breedToShow}`)
              })
            },[breedToShow])
  
  
const nombresRazas=Object.keys(breeds)

const handleSearchChange = (event)=>{
  setShowFilter(event.target.value)
}

const filterRaza=nombresRazas.filter(r=>r.includes(showFilter))

//añadiendo a my team

const addDog=(d)=>{
  
  const dogObject={
    photo:d,
    breed:breedToShow
  }
 setMyTeam(myTeam.concat(dogObject))

}


//pagination 
const indexOfLastBreed=currentPage*breedPerPage
const indexOfFirstBreed=indexOfLastBreed-breedPerPage
const currentBreed= dogs.slice(indexOfFirstBreed, indexOfLastBreed)
//change page
const paginate=(pageNumber)=> setCurrentPage(pageNumber)

return (
  <Router>
<div>
<nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/breeds">Breeds</Link>
            </li>
            <li>
              <Link to="/myteam">MyTeam</Link>
            </li>
          </ul>
        </nav>
<Switch>
    <Route path='/myteam'>
    <DisplayMyTeam myTeam={myTeam} setMyTeam={setMyTeam} />
    </Route>
    <Route path='/breeds/:raza'>
    <DogsByBreed dogs={currentBreed} breedToShow={breedToShow} addDog={addDog} myTeam={myTeam}/>
    <Pagination breedPerPage={breedPerPage} totalBreed={dogs.length} paginate={paginate}/>  
    </Route>
    <Route path='/'>
    <Filter handleSearchChange={handleSearchChange} showFilter={showFilter}/>
    <Breeds filterRaza={filterRaza} breedToShow={breedToShow} setBreedToShow={setBreedToShow}/>
    </Route>
</Switch>
  </div>

  </Router>
  )
}

export default App
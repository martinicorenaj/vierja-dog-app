import React, {useState, useEffect} from 'react'
import Pagination from '../components/Pagination'
import DogsByBreed from '../modules/DogsByBreed'
import axios from 'axios'

const Breed = () => {
    const [breedToShow, setBreedToShow]=useState('')
    const [dogs, setDogs]=useState([])
    const [breedPerPage]=useState(10)
    const [currentPage, setCurrentPage]=useState(1)
    const [myTeam,setMyTeam]=useState([])

    useEffect (()=>{
        axios
              .get(`https://dog.ceo/api/breed/${breedToShow}/images`)
              .then(response=>{
                setDogs(response.data.message)
               console.log(`cargando raza ${breedToShow}`)
                   })
                 },[breedToShow])

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

    return <div>
        <DogsByBreed dogs={currentBreed} breedToShow={breedToShow} addDog={addDog} myTeam={myTeam}/>
        <Pagination breedPerPage={breedPerPage} totalBreed={dogs.length} paginate={paginate}/>  
    </div>
}

export default Breed
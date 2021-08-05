import React, {useState, useEffect} from 'react'
import { useSelector} from 'react-redux'
import Pagination from '../components/Pagination'
import DogsByBreed from '../modules/DogsByBreed'

import axios from 'axios'

import {Link} from 'react-router-dom'

const Breed = () => {

    const [dogs,setDogs]=useState([])
    const [breedPerPage]=useState(10)
    const [currentPage, setCurrentPage]=useState(1)
    const [myTeam,setMyTeam]=useState([])
    
    
    const breedToShow=useSelector(state=>state.breedToShow) 
    
    
    useEffect (()=>{
        axios
              .get(`https://dog.ceo/api/breed/${breedToShow}/images`)
              .then(response=>{
                
                setDogs(response.data.message)
              
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
    const paginate =(pageNumber)=> setCurrentPage(pageNumber)

    return <div>
        <Link to={`/myTeam`}>
         ir a my team
         </Link>
        <DogsByBreed dogs={currentBreed} addDog={addDog} myTeam={myTeam}/>
        <Pagination breedPerPage={breedPerPage} totalBreed={dogs.length} paginate={paginate} breed={breedToShow}/>  
    </div>
}

export default Breed
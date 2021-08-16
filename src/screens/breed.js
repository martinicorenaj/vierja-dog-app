import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import Pagination from '../components/Pagination'
import DogsByBreed from '../modules/DogsByBreed'


import {Link} from 'react-router-dom'
import { initializeDogs } from '../reducers/dogsReducer'

const Breed = () => {

    const [breedPerPage]=useState(10)
    const [currentPage, setCurrentPage]=useState(1)
    
    
    const dogs=useSelector(state=>state.dogs)
    const breedToShow=useSelector(state=>state.breedToShow) 
    const dispatch=useDispatch()
    
    useEffect (()=>{
               dispatch(initializeDogs(breedToShow))
                
                 },[dispatch])

    
    //pagination 
    const indexOfLastBreed=currentPage*breedPerPage
    const indexOfFirstBreed=indexOfLastBreed-breedPerPage
    const currentBreed= dogs.slice(indexOfFirstBreed, indexOfLastBreed)
    //change page
    const paginate = number => setCurrentPage(number);
    debugger
    return <div>
        <Link to={`/myTeam`}>
         ir a my team
         </Link>
        <DogsByBreed dogs={currentBreed} />
        <Pagination breedPerPage={breedPerPage} totalBreed={dogs.length} paginate={paginate} />  
    </div>
}

export default Breed
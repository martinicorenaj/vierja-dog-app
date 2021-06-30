import React from 'react'
import {useParams} from 'react-router-dom'

const Pagination = ({breedPerPage,totalBreed, paginate})=> {
    const {raza}=useParams
    const pageNumbers=[];
   for (let i=1;i<=Math.ceil(totalBreed/breedPerPage);i++) {
    pageNumbers.push(i);
    }
   return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number=> (
                   <li key={number} className='page-item'>
                       <a onClick={()=> paginate(number)} href='/breeds/:raza/!#'>
                           {number}
                       </a>
                   </li>
                ))}
            </ul>

         </nav>   
    )
}

export default Pagination
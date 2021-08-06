import React from 'react'
import { useSelector } from 'react-redux';


const Pagination = ({breedPerPage, totalBreed, paginate})=> {
    const breed=useSelector(state=>state.breedToShow)
    
    const pageNumbers=[];
   for (let i=1;i<=Math.ceil(totalBreed/breedPerPage);i++) {
    pageNumbers.push(i);
    }
   return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number=> (
                   <li key={number} className='page-item'>
                       <a onClick={()=> paginate(number)} href={`/breeds/${breed}/!#`} 
                       
                       >
                           {number}
                           
                       </a>
                   </li>
                ))}
            </ul>

         </nav>   
    )
}

export default Pagination
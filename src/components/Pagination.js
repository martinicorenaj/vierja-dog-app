import React from 'react'

const Pagination = ({breedPerPage,totalBreed, paginate})=> {
   const pageNumbers=[];
   for (let i=1;i<=Math.ceil(totalBreed/breedPerPage);i++) {
    pageNumbers.push(i);
    }
   return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number=> (
                   <li key={number} className='page-item'>
                       <span onClick={()=> paginate(number)}>
                          {number}
                      </span>
                   </li>
                ))}
            </ul>

         </nav>   
    )
}

export default Pagination
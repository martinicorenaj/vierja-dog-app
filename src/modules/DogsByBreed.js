import React, { useEffect,useState } from 'react'
import axios from 'axios'
import {useParams } from 'react-router-dom'

const DogsByBreed=({dogs,breedToShow,myTeam,addDog})=>{

  const {raza}=useParams
  const [razas, setRazas]=useState([])
  useEffect (()=>{
    axios
          .get(`https://dog.ceo/api/breed/${raza}/images`)
          .then(response=>{
            setRazas(response.data.message)
               })
             },[raza])  

    if (dogs.length>0)
    return (
      <div>
        <h3>{razas}</h3>
        {dogs.map(d =>
          <div key={d}>
        <img src={d} alt="dog img"width='200'height='200' />
        <button onClick={()=>{
         const dogWithSameBreed=myTeam.filter(perro=>perro.breed===breedToShow)
            
         if (dogWithSameBreed.length===3) {
                      return (window.alert(`you can only add 3 ${breedToShow} to my Team, please erase one`))
                    }
          if (myTeam.length<10) {
          console.log('eligiendo candidato a my team',{myTeam})
          addDog(d)
          }
          else {
          return (window.alert('too many dogs in my Team, please erase one'))
          }
        }
          
          }>
        add to my team
        </button>
        </div>
        )}
    </div>
      
    )
  return (
    <p>elegí raza</p>
  )
  }

  export default DogsByBreed
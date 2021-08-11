import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeDogFromMyteam } from '../reducers/myTeamReducer'
import './displayMyTeam.css'

const DisplayMyTeam=()=>{
  const myTeam=useSelector(state=>state.myTeam)
  const dispatch=useDispatch()

  const breedsInMyTeam=myTeam.map(perro=>
    perro.breed
    
  )
  let uniqueBreeds = [...new Set(breedsInMyTeam)]
  
  console.log(uniqueBreeds)
  console.log(breedsInMyTeam)
  return (
  <div>
    <h2>My team</h2>
    <div className='Dog-photo-container'>
    {uniqueBreeds.map(breed=>{
     const myTeamByBreed=myTeam.filter(d=>d.breed===breed)
     return <div>
       <h1>{breed}</h1>
      { myTeamByBreed.map(dog=>
      <div>
      <div className='photo-button' key={dog}>
      
      <img  src={dog.photo} className='Dog-photo' alt="dog img" />
      <p><button onClick={()=>{ 
        
        dispatch(removeDogFromMyteam(dog))
       
    }
      }>
      remove from myTeam  
      </button>
      </p>
      </div>
      </div>
      )}
     </div>
    })
    }
    </div>
      
  </div>
  )}
export default DisplayMyTeam
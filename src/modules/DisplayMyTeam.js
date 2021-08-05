import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeDogFromMyteam } from '../reducers/myTeamReducer'


const DisplayMyTeam=()=>{
  const myTeam=useSelector(state=>state.myTeam)
  const dispatch=useDispatch()

  const breedsInMyTeam=myTeam.map(perro=>
    perro.breed
    
  )
  let uniqueBreeds = [...new Set(breedsInMyTeam)]
  debugger
  console.log(uniqueBreeds)
  console.log(breedsInMyTeam)
  return (
  <div>
    <h2>My team</h2>
    <div>
    {uniqueBreeds.map(breed=>{
     const myTeamByBreed=myTeam.filter(d=>d.breed===breed)
     return <div>
       <h1>{breed}</h1>
      { myTeamByBreed.map(dog=>
      <div>
      <div key={dog}>
      
      <img src={dog.photo} alt="dog img"width='200'height='200' />
      <p><button onClick={()=>{ 
        
        dispatch(removeDogFromMyteam(dog))
        console.log('borrando',{dog})  
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
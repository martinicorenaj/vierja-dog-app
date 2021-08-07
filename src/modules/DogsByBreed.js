import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addDogToMyTeam } from '../reducers/myTeamReducer'
import './dogsByBreed.css'


const DogsByBreed=({dogs})=>{

  const dispatch=useDispatch()
  const breedToShow=useSelector(state=>state.breedToShow) 
  const myTeam=useSelector(state=>state.myTeam)
  
    if (dogs.length>0)
    return (
      <div> 
        <h3>{breedToShow}</h3>
      <div className='dog-photo-container'>
        
        {dogs.map(d =>
          <div key={d}>
        <img src={d} className='Dog-photo' alt="dog img" />
        <button className='button' onClick={()=>{
         const dogWithSameBreed=myTeam.filter(perro=>perro.breed===breedToShow)
            
         if (dogWithSameBreed.length===3) {
                      return (window.alert(`you can only add 3 ${breedToShow} to my Team, please erase one`))
                    }
          if (myTeam.length<10) {
          console.log('eligiendo candidato a my team',{myTeam})
        
          dispatch(addDogToMyTeam(d,breedToShow))
      
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
    </div>
    )
  return (
    <p>elegí raza</p>
  )
  }

  export default DogsByBreed
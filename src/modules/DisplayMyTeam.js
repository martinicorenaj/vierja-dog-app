import React from 'react'

const DisplayMyTeam=({myTeam,setMyTeam})=>{

const breedsInMyTeam=myTeam.map(perro=>
  perro.breed
  
)
let uniqueBreeds = [...new Set(breedsInMyTeam)]
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
      const dogsFiltered=myTeam.filter(perro=>perro!==dog)
      setMyTeam(dogsFiltered)
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
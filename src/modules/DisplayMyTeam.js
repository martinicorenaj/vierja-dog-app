import React from 'react'

const DisplayMyTeam=({myTeam,setMyTeam})=>

<div>
  <h2>My team</h2>
  {myTeam.map(d =>
  <div key={d}>
    <h4>{d.breed}</h4>
    <img src={d.photo} alt="dog img"width='200'height='200' />
    <p><button onClick={()=>{ 
      const dogsFiltered=myTeam.filter(perro=>perro!==d)
      setMyTeam(dogsFiltered)
      console.log('borrando',{d})  
  }
    }>
    remove from myTeam  
    </button>
    </p>
    </div>
    )}
</div>

export default DisplayMyTeam
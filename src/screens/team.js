import React, {useState } from 'react'
import DisplayMyTeam from '../modules/DisplayMyTeam'

const MyTeam = () => {
    const [myTeam,setMyTeam]=useState([])
    return <div>
        <DisplayMyTeam myTeam={myTeam} setMyTeam={setMyTeam} />
    </div>
}

export default MyTeam
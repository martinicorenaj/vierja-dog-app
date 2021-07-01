import React, {useState } from 'react'
import { useParams } from 'react-router-dom'
import DisplayMyTeam from '../modules/DisplayMyTeam'

const MyTeam = () => {
    const [myTeam,setMyTeam]=useState([])
    const {team}=useParams()
    console.log(team)
    return <div>
        <DisplayMyTeam myTeam={myTeam} setMyTeam={setMyTeam} />
    </div>
}

export default MyTeam
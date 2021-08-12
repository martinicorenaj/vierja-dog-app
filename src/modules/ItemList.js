
import {useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { setBreedToShow } from '../reducers/breedToShowReducer'
import {useDispatch} from 'react-redux'

const ItemList=(breed)=>{
    const dispatch=useDispatch()
    const [loading,setLoading]=useState(true)
    const [imgUrl,setImgUrl]=useState('')    

   
    const fetchBreed= async (breed) => {
        setLoading(true)
        try {
          const res = await fetch (
            `https://dog.ceo/api/breed/${breed}/images/random`
          );
          const data = await res.json()
          debugger
          setImgUrl(data.message);
        } catch (error) {
          console.log(error)
         }
        };

      useEffect (() => {
          fetchBreed(breed)
        },[])


        return (
        <li key={breed}>
        {loading ? <div>loading...</div> : <img src={imgUrl}  alt='random-dog-img' heigh='50' width='50'/>  }
        
         {breed}

         
         <Link to={`/breeds/${breed}`}>
         <button onClick={()=>{
           dispatch(setBreedToShow(breed))
           
          }  
           }>
          elegir raza
         </button>
         </Link>
        </li>
        )

    }


export default ItemList
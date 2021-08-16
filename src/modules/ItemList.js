
import {useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { setBreedToShow } from '../reducers/breedToShowReducer'
import {useDispatch} from 'react-redux'
import './itemList.css'

const ItemList=({breed})=>{
   
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
          setLoading(false)
          setImgUrl(data.message);
        } catch (error) {
          console.log(error)
         }
        };

      useEffect (() => {
          fetchBreed(breed)
        },[])


        return (
         <div class='photo-container' >
        <li key={breed}>
        {loading ? <div>loading...</div> : <img src={imgUrl}  class='random-dog-img' alt='random-dog-img' />  }
        <div class='buttonYbreed-container'>
        <div class='breed-box'>
         {breed}
        </div>
         
         <Link to={`/breeds/${breed}`}>
         <button onClick={()=>{
           dispatch(setBreedToShow(breed))
           
          }  
           }>
          elegir raza
         </button>
         </Link>
         </div>
        </li>
        </div>
        )

    }


export default ItemList
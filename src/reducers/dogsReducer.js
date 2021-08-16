import axios from "axios"
const dogsReducer=(state=[],action) => {
    switch(action.type) {
        case 'INIT_DOGS':
            return action.data
        
        default:
           return state    
    }
}

export const initializeDogs = (breedToShow) => {
return async dispatch => {

  const dogs = await axios
               .get(`https://dog.ceo/api/breed/${breedToShow}/images`)
               
               .then(response=> response.data.message)
               
dispatch ({type:'INIT_DOGS',
        data:dogs,
})
}}

export default dogsReducer
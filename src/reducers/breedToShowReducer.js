const breedToShowReducer=(state='',action)=>{
    switch(action.type) {
    
    case 'SET_BREED':
    return action.breedToShow
   
    default: 
       return state    
    }

}

export const setBreedToShow=breedToShow=>{
return  {
    type:'SET_BREED',
    breedToShow
}

}

export default breedToShowReducer
const myTeamReducer=(state=[],action)=>{
    switch(action.type) {
        case 'ADD_DOG':
            return [...state,action.data]
   
   case 'ERASE_DOG':
       return state.filter(d=>d!==action.dog)
  
       default:
        return state
        }
}

export const addDogToMyTeam=(d,breed)=> {
    return {
        type:'ADD_DOG',
        data:{
            photo:d,
            breed,
        }
    }
}
export const removeDogFromMyteam=(dog)=> {
    return {
        type:'ERASE_DOG',
        dog,
    }
}
export default myTeamReducer
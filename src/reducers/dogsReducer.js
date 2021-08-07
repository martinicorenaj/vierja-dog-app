const dogsReducer=(state=[],action) => {
    switch(action.type) {
        case 'INIT_DOGS':
            return action.data
        
        default:
           return state    
    }
}

export const initializeDogs = (dogs) => {
return {type:'INIT_DOGS',
        data:dogs,
}
}

export default dogsReducer
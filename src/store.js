import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import filterReducer from './reducers/filterReducer'
import breedToShowReducer from './reducers/breedToShowReducer'
import dogsReducer from './reducers/dogsReducer'
import myTeamReducer from './reducers/myTeamReducer'

const reducer = combineReducers({
    breedToShow:breedToShowReducer,
    filter:filterReducer,
    dogs:dogsReducer,
    myTeam:myTeamReducer,
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)


export default store
import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import filterReducer from './reducers/filterReducer'
import breedToShowReducer from './reducers/breedToShowReducer'

import myTeamReducer from './reducers/myTeamReducer'

const reducer = combineReducers({
    breedToShow:breedToShowReducer,
    filter:filterReducer,
    myTeam:myTeamReducer,
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)


export default store
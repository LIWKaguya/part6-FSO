import { combineReducers } from 'redux'
import {createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'

const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    notification: notificationReducer,
    filterWord: filterReducer
})

const store = createStore(
    reducer,
    composeWithDevTools()
)

export default store
import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import {Reducer, State} from '../reducers/reducers'
import thunk from "redux-thunk"
import main from './main'
const storeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export type AppState = {
    state: State
}

const store = createStore(
    combineReducers<AppState>({
        state: Reducer
    }),
    storeEnhancers(applyMiddleware(thunk))
)

export default store
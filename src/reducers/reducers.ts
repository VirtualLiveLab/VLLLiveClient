import { reducerWithInitialState } from 'typescript-fsa-reducers'

export interface State {
//ここにstoreが持つstateを書く

}

export const initialState: State = {
//ここにstateの初期値を書く

}

export const Reducer = reducerWithInitialState(initialState)
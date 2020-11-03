import { reducerWithInitialState } from 'typescript-fsa-reducers';
import {LoginAction} from '../actions/authAction';

export interface ITokenState {
    apiToken: string
    refreshToken: string
    lastUpdatedTime: number
    limit: number
}
const init : ITokenState = {
    apiToken: "",
    refreshToken:"",
    lastUpdatedTime: 0,
    limit: 0,
}
export const TokenReducer = reducerWithInitialState(init)
    .case(LoginAction.getRefreshToken, (state, payload)=> payload)


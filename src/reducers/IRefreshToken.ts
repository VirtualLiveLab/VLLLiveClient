import { reducerWithInitialState } from 'typescript-fsa-reducers';
import {LoginAction} from '../actions/authAction';

export interface ITokenState {
    apiToken: string
}
const init : ITokenState = {
    apiToken: "",
}
export const TokenReducer = reducerWithInitialState(init)
    .case(LoginAction.getApiToken, (state, payload)=> payload)


import { reducerWithInitialState } from "typescript-fsa-reducers";
import {LoginAction} from "../actions/authAction";
export interface ILoginState {
    isLogin: boolean
    count: Number
}

const init: ILoginState = {
    isLogin: false,
    count: 0
}
export const LoginReducer = reducerWithInitialState(init)
    .case(LoginAction.IsLogin, (state, payload) => {
        return{...state, isLogin: payload}
    })
    .case(LoginAction.getCount, (state, payload) => {
        return{...state, count: payload}
    })


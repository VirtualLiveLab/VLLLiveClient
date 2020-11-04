import { reducerWithInitialState } from "typescript-fsa-reducers";
import {LoginAction} from "../actions/authAction";
export interface ILoginState {
    isLogin: boolean
}

const init: ILoginState = {
    isLogin: false
}
export const LoginReducer = reducerWithInitialState(init)
    .case(LoginAction.IsLogin, (state, payload) => {
        return{...state, isLogin: payload}
    })


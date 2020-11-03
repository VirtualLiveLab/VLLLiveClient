import { reducerWithInitialState } from "typescript-fsa-reducers";
import { LoginAction} from '../actions/authAction'

export interface IUserIconState{iconPath: string}
const init : IUserIconState = {iconPath: ""}

export const IconReducer = reducerWithInitialState(init)
    .case(LoginAction.getUserIcon, (state, payload)=> payload)

import { reducerWithInitialState } from "typescript-fsa-reducers";
import {LoginAction} from "../actions/authAction";

export interface IPropertyState {
  id: number;
  userName: string;
}
const init: IPropertyState = {
  id: 0,
  userName: "",
};

export const PropertyReducer = reducerWithInitialState(init)
    .case(LoginAction.getUserProperty, (state, payload) => payload)

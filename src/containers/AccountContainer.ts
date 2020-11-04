import { connect } from 'react-redux'
import {IState} from "../store/store";
import {Dispatch} from "redux";
import {get, LoginAction, post, confirm} from "../actions/authAction"
import AccountComponent from "../components/view/AccountComponent";

export interface AccountDispatchProps {
    verifyLogin: () => void
    getUserProperty:()=>void
    getUserIcon:()=>void
    setIcon:(file:FormData)=>void
    setUserProperty:(username: string) => void
}

function mapStateToProps(state: IState): IState{
    return state;
}
function mapDispatchToProps (dispatch: Dispatch): AccountDispatchProps {
    return {
        verifyLogin:() => confirm('/confirm_login', ok=> dispatch(LoginAction.IsLogin(ok))),
        getUserProperty:()=> get('/user/property', json => dispatch(LoginAction.getUserProperty({id: json.id, userName: json.username}))),
        getUserIcon:()=> get('/user/icon', json => dispatch(LoginAction.getUserIcon({iconPath: json.iconPath}))),
        setIcon:(file:FormData)=> post('/user/icon/set', file, json => dispatch(LoginAction.getUserIcon({iconPath: json.iconPath}))),
        setUserProperty:(username:string) => post('/user/property/set', JSON.stringify({username: username} ),json => dispatch(LoginAction.getUserProperty({id: json.id, userName: json.username}))),
    }
}
export const AccountContainer = connect(mapStateToProps, mapDispatchToProps)(AccountComponent)

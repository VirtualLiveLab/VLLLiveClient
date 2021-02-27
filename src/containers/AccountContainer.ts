import { connect } from 'react-redux'
import {IState} from "../store/store";
import {Dispatch} from "redux";
import {get, LoginAction, confirm, setUser, uploadFile} from "../actions/authAction"
import AccountComponent from "../components/view/account/AccountComponent";
import JoinAbout from "../components/view/join/JoinAbout";

export interface AccountDispatchProps {
    verifyLogin: () => void
    getUserProperty:()=>void
    getUserIcon:()=>void
    setIcon:(file:File, url: string)=>void
    setUserProperty:(id: number, username: string) => void
    WithdrawUser:() => void
}

function mapStateToProps(state: IState): IState{
    return state;
}
function mapDispatchToProps (dispatch: Dispatch): AccountDispatchProps {
    return {
        verifyLogin:() => confirm('/confirm_login', ok=> dispatch(LoginAction.IsLogin(ok))),
        getUserProperty:()=> get('/user/property', json => dispatch(LoginAction.getUserProperty({id: json.id, userName: json.username}))),
        getUserIcon:()=> get('/user/icon', json => dispatch(LoginAction.getUserIcon({iconPath: json.iconPath}))),
        //getUserCount:() => get('/user/count', json => dispatch(LoginAction.getCount(json.count))),
        //ユーザーデータの変更
        setIcon:async (f, url) => {
            await uploadFile('/user/icon', f)
            dispatch(LoginAction.getUserIcon({iconPath: url}))
        },
        setUserProperty: async (id, username) => {
            await setUser("/user/property", username)
            dispatch(LoginAction.getUserProperty({id: id, userName: username}))
        },
        WithdrawUser:() => {}
    }
}
export const AccountContainer = connect(mapStateToProps, mapDispatchToProps)(AccountComponent)
export const JoinAboutContainer = connect(mapStateToProps, mapDispatchToProps)(JoinAbout)

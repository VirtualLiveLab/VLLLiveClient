import { connect } from 'react-redux'
import {IState} from "../store/store";
import {Dispatch} from "redux";
import {get, LoginAction, confirm, setUser, uploadFile} from "../actions/authAction"
import AccountComponent from "../components/view/account/AccountComponent";

export interface AccountDispatchProps {
    verifyLogin: () => void
    getUserProperty:()=>void
    getUserIcon:()=>void
    setIcon:(file:File)=>void
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
        //ユーザーデータの変更
        setIcon:(f) => uploadFile('/user/icon', f),
        setUserProperty:(username) => {
            console.log(username)
            setUser("/user/property", username)

        }
    }
}
export const AccountContainer = connect(mapStateToProps, mapDispatchToProps)(AccountComponent)

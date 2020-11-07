import {connect} from 'react-redux'
import {IState} from "../store/store";
import {Dispatch} from "redux";
import {LoginAction, get, confirm, uploadFile, setUser} from "../actions/authAction"
import ShowStateComponent from "../components/view/test/ShowStateComponent";

export interface DispatchProps {
    verifyLogin: () => void
    logout: () => void
    getUserProperty: () => void
    getUserIcon: () => void
    getApiToken: () => void
    setIcon: (file: File) => void
    setUserProperty: (username: string) => void
}

function mapStateToProps(state: IState): IState {
    return state;
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
    return {
        verifyLogin: () => confirm('/confirm_login', ok => dispatch(LoginAction.IsLogin(ok))),
        logout: () => get('/logout', json => dispatch(LoginAction.Logout)),
        getUserProperty: () => get('/user/property', json => dispatch(LoginAction.getUserProperty({
            id: json.id,
            userName: json.username
        }))),
        getUserIcon: () => get('/user/icon', json => dispatch(LoginAction.getUserIcon({iconPath: json.iconPath}))),
        getApiToken: () => get('/initial-token', json => dispatch(LoginAction.getApiToken({apiToken: json.apiToken}))),
        //ユーザーデータの変更
        setIcon:async (f) => await uploadFile('/user/icon', f),
        setUserProperty: async (username) => await setUser("/user/property", username)
    }
}

export const ShowStateContainer = connect(mapStateToProps, mapDispatchToProps)(ShowStateComponent);

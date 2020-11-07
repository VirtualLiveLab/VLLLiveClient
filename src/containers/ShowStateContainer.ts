import {connect} from 'react-redux'
import {IState} from "../store/store";
import {Dispatch} from "redux";
import {get, LoginAction, post, confirm} from "../actions/authAction"
import ShowStateComponent from "../components/view/test/ShowStateComponent";

export interface DispatchProps {
    verifyLogin: () => void
    logout: () => void
    getUserProperty: () => void
    getUserIcon: () => void
    getApiToken: () => void
    setIcon: (file: FormData) => void
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
        setIcon:(file:FormData)=> post('/user/icon/set', file, json => dispatch(LoginAction.getUserIcon({iconPath: json.iconPath}))),
        setUserProperty: (username: string) => post('/user/property', JSON.stringify({username: username}), json => dispatch(LoginAction.getUserProperty({
            id: json.id,
            userName: json.username
        }))),
    }
}

export const ShowStateContainer = connect(mapStateToProps, mapDispatchToProps)(ShowStateComponent);

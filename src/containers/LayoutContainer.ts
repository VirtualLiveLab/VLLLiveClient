import {connect} from 'react-redux'
import {IState} from "../store/store";
import {Dispatch} from "redux";
import {get, LoginAction, post, confirm} from "../actions/authAction"
import LayoutComponent from "../components/view/LayoutComponent";
import ShowStateComponent from "../components/view/test/ShowStateComponent";

export interface DispatchProps {
    verifyLogin: () => void
    logout: () => void
    getUserProperty: () => void
    getUserIcon: () => void
    getRefreshToken: () => void
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
        getRefreshToken: () => get('/refresh_token', json => dispatch(LoginAction.getRefreshToken({
            apiToken: json.apiToken,
            refreshToken: json.refreshToken,
            lastUpdatedTime: Date.now(),
            limit: json.limit,
        }))),
        setIcon:(file:FormData)=> post('/user/icon/set', file, json => dispatch(LoginAction.getUserIcon({iconPath: json.iconPath}))),
        setUserProperty: (username: string) => post('/user/property/set', JSON.stringify({username: username}), json => dispatch(LoginAction.getUserProperty({
            id: json.id,
            userName: json.username
        }))),
    }
}

export const LayoutContainer = connect(mapStateToProps, mapDispatchToProps)(LayoutComponent)
export const ShowContainer = connect(mapStateToProps, mapDispatchToProps)(ShowStateComponent);

import { connect } from 'react-redux'
import {IState} from "../store/store";
import {Dispatch} from "redux";
import {LoginAction, confirm} from "../actions/authAction"
import Bar from "../components/view/common/Bar";
import {ILoginState} from "../reducers/ILoginState";

export interface AuthDispatchProps {
    verifyLogin: () => void
}

function mapStateToProps(state: IState): ILoginState{
    return state.authInfo;
}
function mapDispatchToProps (dispatch: Dispatch): AuthDispatchProps {
    return {
        verifyLogin:()=>confirm('/confirm_login', ok=> dispatch(LoginAction.IsLogin(ok))),
    }
}
export const BarContainer = connect(mapStateToProps, mapDispatchToProps)(Bar)

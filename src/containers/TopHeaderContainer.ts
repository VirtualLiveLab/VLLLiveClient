import {connect} from "react-redux";
import TopHeader from "../components/view/top/TopHeader";
import {IState} from "../store/store";
import {ILoginState} from "../reducers/ILoginState";
const mapStateToProps = (state: IState):ILoginState => state.authInfo
export const TopHeaderContainer= connect(mapStateToProps)(TopHeader)

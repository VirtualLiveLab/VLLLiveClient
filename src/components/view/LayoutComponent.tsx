import React from "react"
import {Route, BrowserRouter} from "react-router-dom"
import Main from "./Main"
import Bg from "./Bg"
import LiveAbout from "./LiveAbout"
import {IState} from "../../store/store"
import "../../styles/sass/main.scss"
import {BarContainer} from '../../containers/BarContainer'
import {DispatchProps, ShowContainer} from "../../containers/LayoutContainer"
import {AccountContainer} from "../../containers/AccountContainer"

interface Own {
}

type Props = Own & IState & DispatchProps
export default class LayoutComponent extends React.Component<Props> {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Bg/>
                    <BarContainer/>
                    <div>
                        <Route exact path={"/"} render={() => <Main/>}/>
                        <Route exact path={"/about"} render={() => <LiveAbout/>}/>
                        <Route exact path={"/show"} render={() => <ShowContainer/>}/>
                        <Route exact path={"/account"} render={() => <AccountContainer/>}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

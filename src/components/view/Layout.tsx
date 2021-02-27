import React, {PureComponent} from "react"
import {Route, BrowserRouter} from "react-router-dom"
import Main from "./top/TopLayout"
import Bg from "./common/Bg"
import LiveAbout from "./join/JoinLayout"
import {BarContainer} from '../../containers/VerifyContainer'
import {AccountContainer} from "../../containers/AccountContainer"
//import {ShowStateContainer} from "../../containers/ShowStateContainer"; //Debug用
import "../../styles/sass/main.scss"

export default class Layout extends PureComponent {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Bg/>
                    <BarContainer/>
                    <div>
                        <Route exact path={"/"} render={() => <Main/>}/>
                        <Route exact path={"/about"} render={() => <LiveAbout/>}/>
                        {/*<Route exact path={"/show"} render={() => <ShowStateContainer/>}/>*/}
                        <Route exact path={"/account"} render={() => <AccountContainer/>}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

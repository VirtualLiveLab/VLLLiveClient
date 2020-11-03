import React from "react";
import {Route, BrowserRouter} from "react-router-dom";
import Bar from './components/view/Bar';
import Main from "./components/view/Main"
import Bg from "./components/view/Bg";
import Account from './components/view/Account'
import LiveAbout from "./components/view/LiveAbout";
import {IState} from "./store/store";
import "./styles/sass/main.scss"
import {DispatchProps, ShowContainer} from "./containers/LayoutContainer";
interface Own{}
type Props = Own & IState  & DispatchProps
export default class Layout extends React.Component<Props>{
    componentDidMount() {
        // LoginAction.IsLogin.started();
        console.log("Didmount")
    }
    render(){
        const isLogin = this.props.authInfo.isLogin;

        let comp;
        if(isLogin){
            //LoginAction.getRefreshToken();
            comp = (
                //Login済みの時に使える
                <Route exact path={"/account"} render = {() => <Account refreshToken={"token"}/>}/>
            )
        }else{
            comp = <div/>
        }

        return (
            <div>
                <BrowserRouter>
                  <Bg />
                  <Route exact path={"/"} render={() => <Bar user={{isLogin: isLogin}}/>}/>
                    {/*<Route exact path={"/login"} render={() => <Bar url={"hoge"}  user={{isLogin: false}}/>}/>*/}
                    <Route exact path={"/about"} render={() => <Bar  user={{isLogin: isLogin}}/>}/>
                    <Route exact path={"/account"} render={() => <Bar user={{isLogin: isLogin}}/>}/>
                    {/* <Route exact path={"/login"} render={()=> <Login/>}/>
                    <Route exact path={"/signup"} render={()=> <SignUp/>}/> */}
                    <div>
                        <Route exact path={"/"} render = {() => <Main />}/>
                        <Route exact path={"/about"} render = {() => <LiveAbout />}/>
                        <Route exact path={"/show"} render = {() => <ShowContainer/>}/>
                        {comp}
                    </div>

                </BrowserRouter>
              
            </div>
        );
    }
}

import React from "react";
import Header from "./Header";
import About from "./About";
import Footer from "./Footer";
interface State{

}
interface Props {

}
// type Props = AuthState

class Main extends React.Component<Props, State>{
    componentDidMount() {
       // LoginAction.IsLogin.started();
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <About/>
                <Footer/>
            </div>
        );
    }
}


export default Main;

import React from "react";
import TopHeader from "./TopHeader";
import TopAbout from "./TopAbout";
import Footer from "../common/Footer";
interface State{

}
interface Props {

}
// type Props = AuthState

class TopLayout extends React.Component<Props, State>{
    componentDidMount() {
       // LoginAction.IsLogin.started();
    }

    render() {
        return (
            <div className="App">
                <TopHeader/>
                <TopAbout/>
                <Footer/>
            </div>
        );
    }
}


export default TopLayout;

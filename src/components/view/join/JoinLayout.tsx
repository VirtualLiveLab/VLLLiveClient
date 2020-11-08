import React from "react";
import JoinHeader from "./JoinHeader";
import Footer from "../common/Footer";
import {JoinAboutContainer} from "../../../containers/VerifyContainer";
export default class JoinLayout extends React.PureComponent {
    render(){
        return(
            <div className = "App" >
                <JoinHeader />
                <JoinAboutContainer/>
                <Footer/>
                </div>
        )
    }

}

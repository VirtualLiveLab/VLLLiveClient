import React from "react";
import JoinAbout from "./JoinAbout";
import JoinHeader from "./JoinHeader";
import Footer from "../common/Footer";
interface Props{}
export default class JoinLayout extends React.Component<Props> {
    render(){
        return(
            <div className = "App" >
                <JoinHeader />
                <JoinAbout/>
                <Footer/>
                </div>
        )
    }

}
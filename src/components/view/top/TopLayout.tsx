import React from "react";
import TopAbout from "./TopAbout";
import Footer from "../common/Footer";
import {TopHeaderContainer} from "../../../containers/TopHeaderContainer"

class TopLayout extends React.PureComponent{
    render() {
        return (
            <div className="App">
                <TopHeaderContainer/>
                <TopAbout/>
                <Footer/>
            </div>
        );
    }
}


export default TopLayout;

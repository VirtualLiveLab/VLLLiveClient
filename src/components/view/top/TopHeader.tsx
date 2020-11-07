import React, {Component} from 'react';
import clientConfig from "../../../utils/config";

interface Props {

}

interface State {

}

// const InfoPaper = {
//     head : "",
//     description: "ログインはこちら↓"
// }
class TopHeader extends Component<Props, State> {
    render() {
        return (
            <section id="home">
                <div className="row banner">
                    <div className="banner-text">
                        {/*<h1 className="responsive-headline">{InfoPaper.head}</h1>*/}
                        {/*         <hr />*/}
                        <ul className="button-container">
                            <div className={"auth"}>
                            <a className={"btn04 google"} href={clientConfig.googleLogin} onClick={() => {
                            }}><span>Googleでログインする</span></a>
                            <a className={"btn04 twitter"} href={clientConfig.twitterLogin} onClick={() => {
                            }}><span>Twitterでログインする</span></a>
                            </div>
                        </ul>

                        {/*<h3>{InfoPaper.description}</h3>*/}
                    </div>
                </div>

                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                </p>
            </section>
        )
    }
}

export default TopHeader;

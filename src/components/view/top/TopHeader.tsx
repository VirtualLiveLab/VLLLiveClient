import React, {Component} from 'react';
import {ClientConfig} from "../../../utils/config";
import {ILoginState} from "../../../reducers/ILoginState";

type Props = ILoginState
export default class TopHeader extends Component<Props> {
    render() {
        const isLogin = this.props.isLogin
        return (
            <section id="home">
                <div className="row banner">
                    <div className="banner-text">
                        {!isLogin ?
                        <ul className="button-container">
                            <div className={"auth"}>
                                <a className={"btn04 google"} href={ClientConfig.googleLogin} onClick={() => {
                                }}><span>Googleでログインする</span></a>
                                <a className={"btn04 twitter"} href={ClientConfig.twitterLogin} onClick={() => {
                                }}><span>Twitterでログインする</span></a>
                            </div>
                        </ul>
                        :
                            <div className={"button-container"}>
                                <div className={"auth "}>
                                    <div className={"container"}>
                                        <h1 className={"border center welcome"}> Welcom to VLL LIVE APP！！！</h1>
                                    </div>
                                </div>
                            </div>

                        }

                    </div>
                </div>

                <p className="scrolldown"><a className="smoothscroll" href="#about"><i className="icon-down-circle"/></a></p>
            </section>
        )
    }
}



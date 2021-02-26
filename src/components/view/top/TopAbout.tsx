import React from "react";
import {Button} from "@material-ui/core";
import {ClientConfig} from "../../../utils/config";
import {Link} from "react-router-dom";

export default class TopAbout extends React.Component<any, any> {
    render() {
        return (
            <div id="about">
                <div className="container">
                    <div className={"container-item"}>
                        <div className={"center border"}>
                            <h1 className={"top"}>INFORMATION</h1>
                            <h4 className={"sub"}>開催概要</h4>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className={"container-item"}>
                        <div className={"center"}>
                            <h2 className={"line"}>日程</h2>
                            <h2>2020年11月21日(土)</h2>
                            <div className={"center"}>
                                <h3>18:00開場</h3>
                                <h3>20:00時開演</h3>
                            </div>
                            <Button variant="outlined" color={"primary"}>
                                <Link to={"/about"}>詳しい参加方法をみる！！</Link>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className={"container-item"}>
                        <div className={"center"}>
                            <h2 className={"line"}>会場</h2>

                            <div className={"flex button-container"}>
                                <div className={"container-item center"}>
                                <h2>参加方法そのA: MIKUECライブアプリをダウンロードする</h2>
                                <p>MIKUEC2020の特設サイトが下記のリンクで公開中!?</p>
                                <div className={"container-item center"}>
                                    <div className="arrow-bottom"/>
                                </div>
                                <Button variant={"outlined"} color={"primary"}>
                                    <Link to={"/about"}>参加方法へ移動する</Link>
                                </Button>
                                </div>
                                <div className={"container-item center"}>
                                <h2>参加方法そのB: ライブ配信を視聴する</h2>
                                <div className={"container-item center"}>
                                <div className="arrow-bottom"/>
                            </div>
                                <div className={"container-item center"}>
                                    <ul className="button-container">
                                        <div className={"broadcast"}>
                                            <a className={"btn04 google"} href={ClientConfig.youtubeLive} onClick={() => {
                                            }}><span>Youtube</span></a>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className={"container-item"}>
                        <div className={"center"}>
                            <h2 className={"line"}>料金</h2>
                            <h2>無料</h2>
                            <p>※定員は1500人になっていますのでアカウント登録は早めに！！</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className={"container-item"}>
                        <div className={"center"}>
                            <h2 className={"line"}>HP</h2>
                            <h2>MIKUEC2020の特設サイトが公開中</h2>
                            <p>電気通信大学公認サークル「バーチャルライブ研究会」の</p>
                            <p>部員が作成したギャラリーが公開中</p>

                            <Button variant="outlined" color={"primary"}>
                                <a href={"https://mikuec.com/2020/"}>
                                    MIKUECのHPに行く！！
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

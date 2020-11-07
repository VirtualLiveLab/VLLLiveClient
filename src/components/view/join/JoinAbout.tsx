import React, {Component} from "react";
import {Button} from "@material-ui/core";

import {Link} from "react-router-dom";
const zip = "http://localhost:3010/hoge"
const qr = "http://localhost:3010/qr.png"
class JoinAbout extends Component {
    render(){
        return(
            <div className={"live-about"}>
                <div className="container">
                    <div className={"container-item"}>
                        <div className={"center"}>
                            <h2 className={"line"}><p>その①</p><p>アカウントの作成</p></h2>

                            <p>GoogleもしくはTwitterのアカウントをまず作成します</p>
                            <p>その後、GoogleもしくはTwitterのアカウントを用いて
                                <Button variant={"outlined"} color={"primary"}>
                                    <Link to={"/"}>トップページ</Link>
                                </Button>
                                のボタンからログインしましょう</p>
                            ログインするとユーザーセッティング用のページを開けるようになります
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className={"container-item"}>
                        <div className={"center"}>
                            <h2 className={"line"}><p>その②</p><p>アプリケーションのダウンロード</p></h2>
                            <p>
                                <Button variant={"outlined"} color={"primary"}>
                                    <a href={zip}>ダウンロードする!!</a>
                                </Button> ←こちらのリンクからアプリケーションの入ったzipファイルをダウンロードします
                            </p>
                            <p> 注: 対応OS(WindowsPC)</p>

                            <p>Windowszipファイルを展開します</p>
                            <img src="../../styles/img/img_zip.png" alt="zipファイルの展開IMG"/>
                            <p>展開方法をここに書く</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className={"container-item"}>
                        <div className={"center"}>
                            <h2 className={"line"}><p>その③</p><p>アプリケーションの実行</p></h2>
                            <p>MIKUECライブアプリ.exeをダブルクリックしてアプリケーションを実行します</p>
                            <p>ライブアプリを開くと認証のための鍵を必要とされるので</p>
                            <p>

                                <Button variant={"outlined"} color={"primary"}>
                                    <a href={qr}>ダウンロードする!!</a>
                                </Button> ←こちらのリンクから認証キーををダウンロードしてください(有効期限15分)
                            </p>
                            <p>
                            下記の画像のように認証キーをアップロードしてもらうとライブへ入ることができます！！
                            </p>
                            <img src="" alt="鍵のアップロードするときの画像"/>
                        </div>
                    </div>
                </div>


            </div>

        )
    }
}

export default JoinAbout

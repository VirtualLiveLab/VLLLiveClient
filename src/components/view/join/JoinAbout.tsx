import React, {Component} from "react";
import {Button} from "@material-ui/core";
import clientConfig from "../../../utils/config";
import {Link} from "react-router-dom";

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
                                    <a href={clientConfig.zip}>ダウンロードする!!</a>
                                </Button> ←こちらのリンクからアプリケーションの入ったzipファイルをダウンロードします
                            </p>
                            <p> 注: 対応OS(WindowsPC)</p>

                            <p>ダウンロードしたzipファイルを右クリックして'すべて展開(T)...'からWindowsのzipファイルを任意の場所に展開してください</p>
                            {/*<img src="../../styles/img/img_zip.png" alt="zipファイルの展開IMG"/>*/}
                            {/*<p>展開方法をここに書く</p>*/}
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className={"container-item"}>
                        <div className={"center"}>
                            <h2 className={"line"}><p>その③</p><p>アプリケーションの実行</p></h2>
                            <p>展開したフォルダ内から'MIKUECライブアプリ.exe'をダブルクリックしてアプリケーションを実行します</p>
                            <p>ライブアプリを開くと認証のための鍵を必要とされるので</p>
                            <p>

                                <Button variant={"outlined"} color={"primary"}>
                                    <a href={clientConfig.qr}>ダウンロードする!!</a>
                                </Button> ←こちらのリンクから認証キーををダウンロードして(有効期限15分)

                            </p>
                            <p>'Select QR Code'からQrコードを選択してください.</p>
                            <p>認証キーをアップロードしてもらうとライブへ入ることができます！！</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default JoinAbout

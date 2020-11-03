import React from "react";
import { Button } from "@material-ui/core";

export default class About extends React.Component<any, any> {
  render() {
    return (
      <div id="about">
        <div className="highlight">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="intro">
                  <h2>About</h2>
                  <p>
                    電気通信大公認サークルのVLLの新たにバーチャルでミクライブ開催！！！
                  </p>
                  <Button className="btn" variant="outlined" color={"primary"}>
                    詳しい概要をみる！！
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="highlight">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="intro">
                  <h2>Info</h2>
                  <p>MIKUECについて</p>
                  <Button className="btn" variant="outlined" color={"primary"}>
                    詳しい概要をみる！！
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="highlight">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="intro">
                  <h2>注意事項</h2>
                  <p>ライブに参加する前にみてね！！！</p>
                  <Button className="btn" variant="outlined" color={"primary"}>
                    詳しい概要をみる！！
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="highlight">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="intro">
                  <h2>MIKUECについて知る</h2>
                  <p>MIKUEC2020の特設サイトが下記のリンクで公開中!?</p>
                  <Button className="btn" variant="outlined" color={"primary"}>
                    <a href={"https://mikuec.com/2020/"}>
                      MIKUECのHPに行く！！
                    </a>
                  </Button>
                </div>
                {/*  <a href="note:sample.txt">Sample.txtを開く</a>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

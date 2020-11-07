import React, { Component } from 'react';
interface Props{
}
interface State{

}
class Footer extends Component<Props, State> {
    render() {
        return (
            <footer>
                 <div className="footer">
                     <div className="footer-down">
                         <p>当サイトはピアプロ・キャラクター・ライセンスに基づいてクリプトン・フューチャー・メディア株式会社のキャラクター「初音ミク」を描いたものです。 </p>
                         <p className="copyright">© 2020 電気通信大学バーチャルライブ研究会 </p>
                     </div>

                 </div>
            </footer>
        );
    }
}

export default Footer;

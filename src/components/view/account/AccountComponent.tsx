import React, {ChangeEvent} from "react";
import {Button, Container, Paper} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {AccountDispatchProps} from "../../../containers/AccountContainer";
import {IState} from "../../../store/store";
import 'react-image-crop/dist/ReactCrop.css';
import {ImgCropContainer} from "../../../containers/ImgCropContainer";
import {withRouter} from "react-router";
import {RouteComponentProps} from "react-router-dom";

interface State {
    newUsername: string
    iconFile: File
}

type Props = IState & AccountDispatchProps & RouteComponentProps

//Loginされているとき表示できる
class AccountComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        props.verifyLogin()
        this.props.getUserIcon()
        this.props.getUserProperty()
        if(!this.props.authInfo.isLogin){
            this.props.history.push('/')
        }
    }

    handleSetIcon(e: ChangeEvent<HTMLInputElement>) {
        if (e.currentTarget.files) {
            console.log("uploads")
            this.setState({iconFile: e.currentTarget.files[0]})
            alert("アイコンを読み込み中！！")
        }
    }
    dataURLtoFile(dataurl: any, filename:string ): File {
        let arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);

        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, {type:mime});
    }
    async handleSubmitIcon(url: string) {
        if (!url) {
            alert("アイコンをアップロードしてください")
            console.log("none")
            return
        }

        let file =await fetch(url).then(res =>res.blob())
            .then(blob => new File([blob], "img.png"))

        console.log("UPload")
        this.props.setIcon(file)
        //alert("アイコンを変更します！！")
        //アイコン変更後のCropImageの初期化

    }

    render() {

        const property = this.props.property;
        const iconPath = this.props.icon.iconPath;

        const {imageRef, croppedImageUrl} = this.props.cropImg
        return (
            <section id={"account"}>
                <Container maxWidth="lg" className={"container"}>
                    <Paper className={"paper"}>
                        <div className={"trim"}>
                            <img className={"inner-img"} src={iconPath} alt="iconImage"/>
                            <h2> {property.userName}さん</h2>
                        </div>
                        <form className={"form"} noValidate>

                            <div className={"content"}>

                                <h2>ユーザーネームを変更する</h2>
                                <div className={"container-item"}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="username"
                                    label="new Username Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    onChange={(e) => {
                                        this.setState({
                                            newUsername: e.target.value
                                        })
                                    }}
                                />

                                <Button
                                    fullWidth
                                    variant="contained"
                                    style={{color: "black"}}
                                    className={"submit"}
                                    onClick={() => {if(this.state.newUsername){this.props.setUserProperty(this.state.newUsername)}}}
                                >
                                    ユーザーデータ変更
                                </Button>
                                </div>
                                <h2> アイコンを変更する</h2>
                                <div className={"container-item"}>
                                    <div className={"center"}>
                                        <ImgCropContainer/>
                                    </div>
                                </div>

                                {croppedImageUrl && (
                                    <React.Fragment>
                                        <div className={"container-item"}>
                                            <div className={"center"}>
                                                <div className={"arrow-bottom"}/>
                                            </div>
                                        </div>
                                        <div className={"container-item"}>
                                            <div className={"center"}>
                                                <img alt="Crop"
                                                     style={{width: imageRef?.width, height: imageRef?.height}}
                                                     src={croppedImageUrl}/>
                                            </div>
                                        </div>
                                        <div className={"container-item"}>
                                            <div className={"center img"}>
                                                <Button
                                                    fullWidth
                                                    variant="contained"
                                                    style={{color: "black"}}
                                                    className={"submit"} onClick={()=>this.handleSubmitIcon(croppedImageUrl)}>
                                                    変更する!!
                                                </Button>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                )}

                            </div>
                        </form>
                    </Paper>
                </Container>
            </section>
        )
    }
}

export default withRouter(AccountComponent);


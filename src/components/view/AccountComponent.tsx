import React, {ChangeEvent} from "react";
import {Button, Container, Paper} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {AccountDispatchProps} from "../../containers/AccountContainer";
import {IState} from "../../store/store";


interface State{
    newUsername: string
    iconFile: File
}

type Props = IState & AccountDispatchProps
//Loginされているとき表示できる
class AccountComponent extends React.Component<Props, State>{
    constructor(props:Props) {
        super(props);
        props.verifyLogin()
        //if (!this.props.authInfo.isLogin)return
        this.props.getUserIcon()
        this.props.getUserProperty()
    }
    handleSetIcon(e: ChangeEvent<HTMLInputElement>) {
        if (e.currentTarget.files) {
            console.log("uploads")
            this.setState({iconFile: e.currentTarget.files[0]})
            alert("アイコンをアップロードしました")
        }
    }

    handleSubmitIcon() {

        if (!this.state.iconFile) {
            alert("アイコンをアップロードしてください")
            console.log("none")
            return
        }
        const formData = new FormData()
        formData.append('icon', this.state.iconFile)
        this.props.setIcon(formData)
        this.setState({newUsername: this.props.property.userName})

    }
    render() {

        const property = this.props.property;
        const iconPath = this.props.icon.iconPath;
        return (
            <section id={"account"}>
                <Container maxWidth="lg" className={"container"}>
                        <Paper className={"paper"}>
                            <div className={"trim"}>
                                <img className={"inner-img"} src={iconPath} alt="iconImage"/>
                                <h2> {property.userName}さん</h2>
                            </div>
                            <form className={"form"} noValidate>

                                <div className={"content"} >
                                    <h2>ユーザーネームを変更する</h2>
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
                                        style={{color: "aqua"}}
                                        className={"submit"}
                                        onClick={() => this.props.setUserProperty(this.state.newUsername)}
                                    >
                                        ユーザーデータ変更
                                    </Button>

                                    <h2> アイコンを変更する</h2>
                                    <div className="flex">
                                    <Button variant="contained" component="label">Upload File
                                        <input type="file" style={{display: "none"}}
                                               onChange={(e) => this.handleSetIcon(e)}/>
                                    </Button>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        style={{color: "aqua"}}
                                        className={"submit"}
                                        onClick={() => this.handleSubmitIcon()}
                                    >
                                    Iconを変更する
                                    </Button>
                                    </div>
                                </div>

                            </form>

                        </Paper>

                </Container>
            </section>
        )
    }
}

export default AccountComponent;


import React from "react";
import {Button} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {withStyles, WithStyles} from "@material-ui/core/styles";
import FormStyle from "../../styles/formStyle";
interface Props extends WithStyles<typeof FormStyle> {
    refreshToken: string
}

interface State{
    newUsername: string
    newPassword: string
}

class Account extends React.Component<Props, State>{

    render() {
        const classes = this.props.classes;
        return (
            <section id={"account"}>
                <form className={"form"} noValidate>
                    <a href={"ApiConnection://ApiToken" }>詳しい概要をみる！！</a>
                    <div className={"form-content"} >
                    <h3>Email変更フォーム</h3>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="new Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={(e) => {
                            this.setState({
                              newUsername: e.target.value
                            })
                        }}
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(e) => {
                            this.setState({
                                newPassword: e.target.value
                            })
                        }}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        style={{color: "aqua"}}
                        className={classes.submit}
                        onClick={() => {
                        //    controller.UserdataChange(this.props.refreshToken, this.state.newUsername)
                        }}
                    >
                        ユーザーデータ変更
                    </Button>

                    </div>
                </form>

            </section>
        )
    }
}

export default withStyles(FormStyle)(Account);


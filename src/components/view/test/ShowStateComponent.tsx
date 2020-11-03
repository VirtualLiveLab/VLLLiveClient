import React, {ChangeEvent} from "react";
import {IState} from "../../../store/store";
import {DispatchProps} from "../../../containers/LayoutContainer";
import clsx from 'clsx';
import {Button, Container, Grid, Paper, TextField, WithStyles} from "@material-ui/core"
import withStyles from "@material-ui/core/styles/withStyles"
import styles from "../../../styles/dashbordStyle.ts"

import {Title} from "@material-ui/icons";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

interface State {
    username: string,
    iconFile: File}
interface Style extends WithStyles<typeof styles> {}
type Props = Style & IState & DispatchProps

class ShowStateComponent extends React.Component<Props, State> {

    handleSetIcon(e: ChangeEvent<HTMLInputElement>) {
        if (e.currentTarget.files) {
            console.log("uploads")
            this.setState({iconFile: e.currentTarget.files[0]})
        }
    }

    handleSubmitIcon() {
        if (!this.state.iconFile) {
            console.log("none")
            return
        }
        const formData = new FormData()
        formData.append('icon', this.state.iconFile)
        this.props.setIcon(formData)
    }


    render() {
        const {classes} = this.props;
        const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


        return (
            <div className={classes.root}>
                <main className={classes.content}>
                    <div className={classes.appBarSpacer}/>
                    <Grid container spacing={3}>
                        <TableRow>
                            <TableCell>
                                <Button variant={"contained"} color={"primary"} onClick={() => {
                                    this.props.getUserProperty()
                                }}>ユーザーデータの更新</Button>
                            </TableCell>
                            <TableCell>
                                <Button variant={"contained"} color={"primary"} onClick={() => {
                                    this.props.getRefreshToken()
                                }}>TOkenの更新</Button>
                            </TableCell>
                            <TableCell>
                                <Button variant={"contained"} color={"primary"} onClick={() => {
                                    this.props.getUserIcon()
                                }}>Iconの更新</Button>
                            </TableCell>

                        </TableRow>
                    </Grid>
                    <Container maxWidth="lg" className={classes.container} >
                        <Grid container spacing={3}>
                            <Paper className={fixedHeightPaper}>
                                <Title>ユーザーデータ</Title>
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>id</TableCell>
                                            <TableCell>username</TableCell>
                                            <TableCell>iconPath</TableCell>
                                            <TableCell align="right">
                                                <Button variant="contained" component="label">Upload File
                                                    <input type="file" style={{display: "none"}}
                                                           onChange={(e) => this.handleSetIcon(e)}/>
                                                </Button>
                                            </TableCell>
                                            <TableCell align="right">
                                                <Button variant={"contained"} color={"primary"}
                                                        onClick={() => this.handleSubmitIcon()}>送信</Button>
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                </Table>
                                <TableBody>
                                    <TableRow key={this.props.property.id}>
                                        <TableCell>{this.props.property.userName}</TableCell>
                                        <TableCell>{this.props.icon.iconPath}</TableCell>
                                        <img src={this.props.icon.iconPath} alt="iconImage" width={100} height={100}/>
                                    </TableRow>
                                </TableBody>
                            </Paper>
                        </Grid>

                    </Container>
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid container spacing={3}>
                            <Paper className={fixedHeightPaper}>
                                <Title>Recent Orders</Title>
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>ApiToken</TableCell>
                                            <TableCell>RefreshToken</TableCell>
                                            <TableCell>limit</TableCell>
                                            <TableCell>lastUpdatedtime</TableCell>
                                        </TableRow>
                                    </TableHead>
                                </Table>
                                <TableBody>
                                    <TableRow key={this.props.property.id}>
                                        <TableCell>{this.props.token.apiToken}</TableCell>
                                        <TableCell>{this.props.token.refreshToken}</TableCell>
                                        <TableCell>{this.props.token.limit}</TableCell>
                                        <TableCell>{this.props.token.lastUpdatedTime}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Paper>
                        </Grid>

                    </Container>
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid container spacing={3}>
                            <Paper className={fixedHeightPaper}>
                                <Title>Recent Orders</Title>
                                <TableBody>
                                    <TableRow key={this.props.property.id}>
                                        <TextField  id="standard-basic" label="Standard" onChange={e=>this.setState({username: e.target.value})}>
                                            InputUsername
                                        </TextField>
                                        <Button onClick={()=> this.props.setUserProperty(this.state.username)}>
                                            SetUserName
                                        </Button>
                                    </TableRow>
                                </TableBody>
                            </Paper>
                        </Grid>

                    </Container>
                </main>
            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(ShowStateComponent);

import {
    AppBar,
    Divider,
    Drawer, IconButton,
    List,
    Toolbar,
    Typography,
    WithStyles
} from "@material-ui/core";
import React from "react";
import AppListItem from "../resouces/AppListItem"
import {Home, Info, AccountCircle} from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "../../styles/mainStyle";
interface UserData{
    isLogin :boolean
}
interface Props extends WithStyles<typeof styles>{
    user:UserData,

}

interface State {
    toggle: {
        w_side: string,
        isOpen: boolean,
    }
}

class Bar extends React.Component<Props, State>{
    state = {
        toggle: {
            w_side: "left",
            isOpen: false
        },
    }


    toggleDrawer(side: string, open: boolean) {
            this.setState({
                toggle: {
                    w_side: side,
                    isOpen: open
                }
            });
        };

    render(){
       // const user = this.state.userData;
        const {classes} = this.props;

        var sideList;
        if(!this.props.user.isLogin){
            sideList = (
                <div>
                    <List className={classes.nav}>
                        <AppListItem name={"トップページ"} link={"/"} Icon={Home}/>
                        <Divider/>
                        <AppListItem name={"ライブ情報"} link={"/about"} Icon={MenuIcon}/>
                        <AppListItem name={"ぽむいけ"} link={"/register"} Icon={Info}/>
                        <AppListItem name={"ぽむいけ"} link={"/register"} Icon={Info}/>
                        <AppListItem name={"ぽむいけ"} link={"/register"} Icon={Info}/>
                    </List>
                </div>
            )
        }else{
            sideList = (
                <div>
                    <List className={classes.nav}>
                        <AppListItem name={"トップページ"} link={"/"} Icon={Home}/>
                        <Divider/>
                        <AppListItem name={"ライブ情報"} link={"/about"} Icon={MenuIcon}/>
                        <AppListItem name={"ユーザ情報"} link={"/info"} Icon={AccountCircle}/>

                        <Divider/>
                        <AppListItem name={"ログアウト"} link={"/logout"} Icon={Info} redirect={true}/>
                    </List>
                </div>
            )
        }
        // let userColumn;
        // if(this.props.user != null) {
        //     userColumn = (
        //         <div>
        //      {/*       <p>name : {this.props.user.userName}</p>
        //             <p>pass : {this.props.user.userPass}</p>
        //             <p>id : {this.props.user.userId}</p>*/}
        //         </div>

        //     )
        // }else{
    
        // }
        return (
            <header>
                <AppBar className={classes.appBar}>
                    <Toolbar >
                        <IconButton edge="start" className={classes.menuButton} color={"inherit"} aria-label="Menu"
                                    onClick={() => this.toggleDrawer('left', true)}>
                            <MenuIcon style={{color: "white"}}/>
                        </IconButton>

                        <Drawer className={classes.drawer} open={this.state.toggle.isOpen}
                                onClose={() => {
                                    this.toggleDrawer('left', false)
                                }}>
                            <div

                                tabIndex={0}
                                role="button"
                                onClick={() => {
                                    this.toggleDrawer('left', false)
                                }}
                                onKeyDown={() => this.toggleDrawer('left', false)}
                            >
                                {sideList}
                            </div>
                        </Drawer>
                        <Typography className={classes.barhead} variant="h6">
                            {/*VLL*/}
                        </Typography>
                        <Divider/>
                        {/*<div className={"simple-menu"}>サインイン</div>*/}
                    </Toolbar>
                </AppBar>
            </header>
        );
    }
}
export default  withStyles(styles, {withTheme: true})(Bar);

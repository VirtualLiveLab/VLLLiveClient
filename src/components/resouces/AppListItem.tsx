import * as React from 'react';
import {SvgIconComponent} from "@material-ui/icons";
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";

import { withRouter, RouteComponentProps, Redirect } from 'react-router-dom'
import clientConfig from "../../utils/config";

interface OwnProps extends RouteComponentProps {}
interface Props extends OwnProps{
    name: string,
    link: string,
    Icon: SvgIconComponent
    redirect?: boolean
}

const style ={
    color: "white"
}

class AppListItem extends React.Component<Props> {

    handleToLinkPage = (link:string) => this.props.history.push(clientConfig.root + link)

    render() {
        return (
            <ListItem button onClick={() => this.handleToLinkPage(this.props.link)}>
                <ListItemIcon>
                    <this.props.Icon style={style}/>
                </ListItemIcon>
                <ListItemText primary={this.props.name} style={style}/>
            </ListItem>
        )
    }
}

export default withRouter(AppListItem);


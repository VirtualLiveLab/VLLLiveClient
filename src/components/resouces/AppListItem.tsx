import * as React from 'react';
import {SvgIconComponent} from "@material-ui/icons";
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import { withRouter, RouteComponentProps} from 'react-router-dom'

interface Props extends RouteComponentProps{
    name: string,
    link: string,
    Icon: SvgIconComponent
}

const style ={ color: "white" }


class AppListItem extends React.Component<Props> {

    async handleToLinkPage (link:string){
        this.props.history.push(link)
    }
    render() {
        return (
            <ListItem button onClick={async () => {
                await this.handleToLinkPage(this.props.link)
            }}>
                <ListItemIcon>
                    <this.props.Icon style={style}/>
                </ListItemIcon>
                <ListItemText primary={this.props.name} style={style}/>
            </ListItem>
        )
    }
}

export default withRouter(AppListItem);


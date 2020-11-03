import * as React from 'react';
import {SvgIconComponent} from "@material-ui/icons";
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";

import { withRouter, RouteComponentProps } from 'react-router-dom'

interface OwnProps extends RouteComponentProps {
    // 親コンポーネントから渡ってきたpropsの型
    // historyを渡す
}
interface Props extends OwnProps{
    name: string,
    link: string,
    Icon: SvgIconComponent
    redirect?: boolean
}


class AppListItem extends React.Component<Props> {

    async handleToLinkPage (link:string){
      /*  await fetch("http//localhost:3010/logout", {
            method: 'GET',
            mode: 'cors',
            cache: 'default',
        });
        if(this.props.redirect){

        }*/
        this.props.history.push(link)


    }
    render() {
        return (
            <ListItem button onClick={async () => {
                await this.handleToLinkPage(this.props.link)
            }}>
             {/*   <a href="http//localhost:3010/logout"></a>*/}
                <ListItemIcon>
                    {<this.props.Icon style={style}/>}
                </ListItemIcon>
                <ListItemText primary={this.props.name} style={style}/>
            </ListItem>
        )
    }
}

export default withRouter(AppListItem);

const style ={
    color: "white"
}

import React from "react";
import {Button} from "@material-ui/core";

interface Props{
    className: string
    href: string
    title: string
    onClick: Function

}

export const LoginButton : React.FC<Props> = props => {
    return(
        <Button className={props.className}  variant="contained" color="primary" style={ {color: "#ffffff", backgroundColor: "#7fffd4"}} onClick={()=> props.onClick}>
            <a href={props.href}> {props.title}</a>
        </Button>
    )
}



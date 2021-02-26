import {actionCreatorFactory} from "typescript-fsa";
import {Action} from "redux";
import {IPropertyState} from "../reducers/IProperty";
import {IUserIconState} from "../reducers/IUserIconState";
import {ITokenState} from "../reducers/IRefreshToken";
import store from '../store/store'
import {ClientConfig} from "../utils/config";
const actionCreator = actionCreatorFactory();
const root = ClientConfig.root
// const sleep = (msec: number)=> new Promise(resolve => setTimeout(resolve, msec));

//get
export function get (url: string, action?:(json: any)=>Action):void {fetch(root + url).then(res => res.json().then(data => {if (res.ok && action) action(data)}));}
export const confirm =(url: string, action:(ok:boolean)=>Action):void => {fetch(root + url).then(res => action(res.ok))}


//post
export const uploadFile = async (url: string, file: File) : Promise<any> => {
    if(!file) return
    const formData = new FormData()
    formData.append('icon', file)
    await fetch(root+url, {
        method: 'POST',
        credentials: "same-origin",
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: formData,
    }).catch(err => console.log(err))
}

export const setUser = async (url: string, name: string): Promise<any> =>{
    if(name === '' || !name) return
    const data = JSON.stringify({username: name})
    await fetch(root+url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: "same-origin",
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: data,
    }).catch(err => console.log(err))
    setTimeout(()=>{store.dispatch(LoginAction.getUserProperty)}, 5000)
}


//Actionの生成
export const LoginAction = {
    IsLogin: actionCreator<boolean>("IsLogin"),
    getCount: actionCreator<number>("GetCount"),
    Logout: actionCreator("Logout"),
    getUserProperty: actionCreator<IPropertyState>("GetUserProperty"),
    getUserIcon:actionCreator<IUserIconState>("GetUserIcon"),
    getApiToken: actionCreator<ITokenState>("GetApiToken"),
}

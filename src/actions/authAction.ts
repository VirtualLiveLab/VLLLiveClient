import {actionCreatorFactory} from "typescript-fsa";
import {Action} from "redux";
import {IPropertyState} from "../reducers/IProperty";
import {IUserIconState} from "../reducers/IUserIconState";
import {ITokenState} from "../reducers/IRefreshToken";
import store from '../store/store'
import {Simulate} from "react-dom/test-utils";
import waiting = Simulate.waiting;
const actionCreator = actionCreatorFactory();
const root :string = "http://localhost:3010";

export function get (url: string, action?:(json: any)=>Action):void {
    fetch(root + url)
        .then(res => res.json()
            .then(data => {
                if (res.ok && action) action(data);
            }));
}
export function confirm (url: string, action:(ok:boolean)=>Action):void {
    fetch(root + url).then(res =>
            action(res.ok)

    )}

export const uploadFile = async (url: string, file: File) : Promise<any> => {
    const formData = new FormData()
    formData.append('icon', file)
    await fetch(root+url, {
        method: 'POST',
        credentials: "same-origin",
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: formData,
    }).catch(err => console.log(err))
    await sleep(1000);
    store.dispatch(LoginAction.getUserIcon)
}
export const setUser = async (url: string, name: string): Promise<any> =>{
    //if(sendData==null) return;
    const data = JSON.stringify({username: name})
    console.log(data)
    await fetch(root+url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        credentials: "same-origin",
        // mode: 'cors',
        // cache: 'no-cache',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: data,
    }).catch(err => console.log(err))
    await sleep(1000);
    store.dispatch(LoginAction.getUserProperty)
}
const sleep = (msec: number)=> new Promise(resolve => setTimeout(resolve, msec));
export function post(url: string, sendData: any, action?:(json?: any)=>Action):void {
    //if(sendData==null) return;
    console.log(sendData)
    fetch(root+url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        credentials: "same-origin",
        mode: 'cors',
        cache: 'no-cache',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: sendData,
    }).then(res => res.json())
        .then(result=>{
            if(action)action(result)
            console.log('success', result)
        }).catch(err => {
        console.log(err);
    })
}
//Actionの生成
export const LoginAction = {
    IsLogin: actionCreator<boolean>("IsLogin"),
    Logout: actionCreator("Logout"),
    getUserProperty: actionCreator<IPropertyState>("GetUserProperty"),
    getUserIcon:actionCreator<IUserIconState>("GetUserIcon"),
    getApiToken: actionCreator<ITokenState>("GetApiToken"),
    // setUserProperty:actionCreator("SetUserProperty")
}

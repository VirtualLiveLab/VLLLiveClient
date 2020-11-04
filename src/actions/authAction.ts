import {actionCreatorFactory} from "typescript-fsa";
import {Action} from "redux";
import {IPropertyState} from "../reducers/IProperty";
import {IUserIconState} from "../reducers/IUserIconState";
import {ITokenState} from "../reducers/IRefreshToken";
const actionCreator = actionCreatorFactory();
const root :string = "http://localhost:3010";

export function get (url: string, action:(json: any)=>Action):void {
    fetch(root + url)
        .then(res => res.json()
            .then(data => {
                if (res.ok) action(data);
            }));
}
export function confirm (url: string, action:(ok:boolean)=>Action):void {
    fetch(root + url).then(res =>
            action(res.ok)

    )}

// export function uploadFile(url: string, formData: FormData) {
//     fetch(root+url, {
//         method: 'POST',
//         body: formData,
//     }).then(res => res.json())
//         .then(result=>{
//             console.log('success', result)
//         }).catch(err => {
//             console.log(err);
//     })
// }
export function post(url: string, sendData: any, action:(json: any)=>Action):void {
    console.log("set")
    fetch(root+url, {
        method: 'POST',
        body: sendData,
    }).then(res => res.json())
        .then(result=>{
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
    getRefreshToken: actionCreator<ITokenState>("GetRefreshToken"),
    setUserProperty:actionCreator("SetUserProperty")
}

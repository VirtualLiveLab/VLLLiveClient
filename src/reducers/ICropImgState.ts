import { reducerWithInitialState } from "typescript-fsa-reducers"
import {CropAction} from "../actions/cropAction"
import {Crop} from "react-image-crop"

export interface ICropImgState{
    imageRef: HTMLImageElement|null
    src: string|null
    crop: Crop,
    croppedImageUrl: string
    fileUrl: string
}

const init: ICropImgState = {
    imageRef: null,
    src: null,
    crop: {
        unit: '%',
        width: 30,
        aspect: 16 / 16,
    },
    croppedImageUrl: "",
    fileUrl: ""
};
const hoge: ICropImgState = {
    imageRef: null,
    src: null,
    crop: {
        unit: '%',
        width: 30,
        aspect: 16 / 16,
    },
    croppedImageUrl: "",
    fileUrl: ""
};



export const CropImgReducer = reducerWithInitialState(init)
    .case(CropAction.onSrcUpdated, (state, str) =>{return {...state, src: str}})
    .case(CropAction.onImageLoaded, (state, e) =>{return {...state, imageRef: e }})
    .case(CropAction.onImageUrlUpdated, (state, e) =>{return {...state, croppedImageUrl: e }})
    .case(CropAction.onFileUrlUpdated, (state, e) =>{return {...state, fileUrl: e }})
    .case(CropAction.onCropChange, (state, c) => {return {...state, crop: c}})
    .case(CropAction.onInitialize, (state) => {return hoge})



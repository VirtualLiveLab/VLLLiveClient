import {actionCreatorFactory} from "typescript-fsa";
import {Crop} from "react-image-crop";

const actionCreator = actionCreatorFactory();

export const CropAction = {
     onSrcUpdated: actionCreator< string | null>("onSrcUpdated"),
     onImageLoaded: actionCreator<HTMLImageElement>("onImageLoaded"),
     onImageUrlUpdated: actionCreator<string>("onImageUrlUpdated"),
     onCropChange: actionCreator<Crop>("onCropChange"),
     onFileUrlUpdated: actionCreator<string>("onFileUrlUpdated"),
     //初期化
     onInitialize: actionCreator("onInit")
}

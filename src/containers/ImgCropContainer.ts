import { connect } from 'react-redux'
import {IState} from "../store/store";
import {Dispatch} from "redux";
import ImgCrop from "../components/view/common/ImgCrop";
import {CropAction} from "../actions/cropAction"
import {ICropImgState} from "../reducers/ICropImgState";
import {Crop} from "react-image-crop";

export interface CropDispatchProps {
    onSrcUpdated: (e:  string |  null) => void
    onImageLoaded: (e: HTMLImageElement) => void
    onImageUrlUpdated: (e: string) => void
    onCropChange: (c: Crop) => void
    onFileUrlUpdated:(e: string) => void
}
function mapStateToProps(state: IState): ICropImgState{
    return state.cropImg;
}

function mapDispatchToProps (dispatch: Dispatch): CropDispatchProps{
    return {
        onSrcUpdated:(e) => dispatch(CropAction.onSrcUpdated(e)),
        onImageLoaded:(e)=> dispatch(CropAction.onImageLoaded(e)),
        onImageUrlUpdated:(e) => dispatch(CropAction.onImageUrlUpdated(e)),
        onCropChange:(c) => dispatch(CropAction.onCropChange(c)),
        onFileUrlUpdated:(e) => dispatch(CropAction.onFileUrlUpdated(e)),
    }
}
export const ImgCropContainer = connect(mapStateToProps, mapDispatchToProps)(ImgCrop)

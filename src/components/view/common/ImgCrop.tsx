import React, {ChangeEvent} from 'react';
import ReactCrop, {Crop} from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import {ICropImgState} from "../../../reducers/ICropImgState";
import {Button} from "@material-ui/core";
import {CropDispatchProps} from "../../../containers/ImgCropContainer";

type Props = ICropImgState & CropDispatchProps

export default class ImgCrop extends React.Component<Props> {
    onSelectFile =(e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener('load', () =>this.props.onSrcUpdated(reader.result as (string | null)));
            reader.readAsDataURL(e.target.files[0]);
        }
    };
    getCroppedImg = (image:HTMLImageElement, crop:any, fileName:any): any => {
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');
        if(!ctx) return "";
        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
        );

        return new Promise((resolve, reject) => {
            canvas.toBlob(blob => {
                if (!blob) {
                    console.error('Canvas is empty');
                    return;
                }
                //blob.name = fileName;
                window.URL.revokeObjectURL(this.props.fileUrl);

                this.props.onFileUrlUpdated(window.URL.createObjectURL(blob))
                resolve(this.props.fileUrl);
            }, 'image/jpeg');
        });
    }

    makeClientCrop = async (crop: Crop) => {
        if (this.props.imageRef && this.props.crop.width && this.props.crop.height) {
            const croppedImageUrl = await this.getCroppedImg(this.props.imageRef, crop, 'newFile.png');
            this.props.onImageUrlUpdated(croppedImageUrl)
        }
    }
    render() {
        const {crop, src} = this.props

        return (
            <div className="flex">
                <Button variant="contained" component="label">アイコンを探す
                    <input type="file" accept="image/*"  style={{display: "none"}}
                           onChange={this.onSelectFile}/>
                </Button>
                {src && (
                    <ReactCrop
                        src={src}
                        crop={crop}
                        ruleOfThirds
                        onImageLoaded={this.props.onImageLoaded}
                        onComplete={ this.makeClientCrop}
                        onChange={this.props.onCropChange}
                    />
                )}
            </div>
        )
    }
}

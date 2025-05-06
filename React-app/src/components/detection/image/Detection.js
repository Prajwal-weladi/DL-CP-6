import React, {  useState, useRef, useContext } from 'react';
import { ModelContext } from '../context/model-context';
import { useDimension } from '../utils/dimension-hook';
import useDetector from './useDetector';
import MagicDropzone from 'react-magic-dropzone';
import upload from '../utils/upload.png';

const Detection = () => {
    const { model, labels } = useContext(ModelContext);
    const dimensions = useDimension();
    const [loadedImg, setLoadedImg] = useState(null);
    const imageRef = useRef();
    const canvasRef = useRef();

    useDetector(model, labels, loadedImg, imageRef, canvasRef)

    const onDrop = (accepted, rejected, links) => {
        if (accepted && accepted.length > 0) {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setLoadedImg(reader.result);
            });
            reader.readAsDataURL(accepted[0]);
        }
    }

    return (
        <React.Fragment>
                <div>
                    <div className="center-div">
                        <div className="card">
                            <MagicDropzone className="dropzone" accept="image/jpeg, image/png, .jpg, .jpeg, .png" multiple={false} onDrop={onDrop}>
                                <div className="center-div-wrap">
                                    {loadedImg ? (
                                        <div className="dropzone-preview">
                                            <img className="dropzone-image" src={loadedImg} alt="Preview" />
                                            <div className="dropzone-info">
                                                <span className="dropzone-success">Image loaded successfully</span>
                                                <span className="dropzone-hint">Drop a new image to replace</span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="dropzone-placeholder">
                                            <div className="dropzone-icon">
                                                <img src={upload} width="60" height="60" alt="upload" />
                                            </div>
                                            <div className="dropzone-text">
                                                <p className="dropzone-title">Drag & Drop Image</p>
                                                <p className="dropzone-subtitle">or click to browse files</p>
                                                <p className="dropzone-formats">Supported formats: JPG, JPEG, PNG</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </MagicDropzone>
                        </div>
                    </div>
                    <div className="center-div">
                        {loadedImg && (
                            <div style={{
                                width: `${dimensions.width}px`,
                                height: `${dimensions.height}px`,
                            }}>
                                <div className="image-container">
                                    <img
                                        src={loadedImg}
                                        width={dimensions.width}
                                        height={dimensions.height}
                                        className="image-canvas"
                                        ref={imageRef}
                                        alt="ok"
                                    />
                                    <canvas
                                        width={dimensions.width}
                                        height={dimensions.height}
                                        className="image-canvas"
                                        ref={canvasRef}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
        </React.Fragment>
    )
}

export default Detection;
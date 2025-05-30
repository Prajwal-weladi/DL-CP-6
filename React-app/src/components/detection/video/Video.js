import React, { useState, useRef, useContext } from 'react';
import { ModelContext } from '../context/model-context';
import MagicDropzone from 'react-magic-dropzone';
import { useDimension } from '../utils/dimension-hook';
import useBoxRenderer from './useBoxRenderer';
import upload from '../utils/upload.png';

const Video = () => {
    const { model, labels } = useContext(ModelContext);
    const dimensions = useDimension();
    const [frame, setFrame] = useState();
    const [videoLoaded, setVideoLoaded] = useState(false);
    const videoRef = useRef();
    const canvasRef = useRef();

    useBoxRenderer(model, videoRef, canvasRef, videoLoaded, labels)

    const onDrop = (accepted, rejected, links) => {
        setVideoLoaded(false);
        if (accepted && accepted.length > 0) {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                videoRef.current.src = reader.result;
                setFrame(`${reader.result}#t=0.1`)
                videoRef.current.onloadeddata = () => {
                    setVideoLoaded(true);
                }
            });
            reader.readAsDataURL(accepted[0]);
        }
    }

    return (
        <React.Fragment>
            <div>
                <div className="center-div">
                    <div className="card">
                        <MagicDropzone className="dropzone" accept="video/mp4, video/x-m4v, video/*" multiple={false} onDrop={onDrop}>
                            <div className="center-div-wrap">
                                {frame ? (
                                    <div className="dropzone-preview">
                                        <video className="dropzone-image" src={frame} />
                                        <div className="dropzone-info">
                                            <span className="dropzone-success">Video loaded successfully</span>
                                            <span className="dropzone-hint">Drop a new video to replace</span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="dropzone-placeholder">
                                        <div className="dropzone-icon">
                                            <img src={upload} width="60" height="60" alt="upload" />
                                        </div>
                                        <div className="dropzone-text">
                                            <p className="dropzone-title">Drag & Drop Video</p>
                                            <p className="dropzone-subtitle">or click to browse files</p>
                                            <p className="dropzone-formats">Supported formats: MP4, MOV, AVI</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </MagicDropzone>
                    </div>
                </div>
                <div className="center-div">
                        <div style={{
                            width: `${dimensions.width}px`,
                            height: `${dimensions.height}px`,
                        }}>
                            <div className="image-container">
                                <video
                                    autoPlay
                                    playsInline
                                    muted
                                    width={dimensions.width}
                                    height={dimensions.height}
                                    className="image-canvas"
                                    ref={videoRef}
                                />
                                <canvas
                                    width={dimensions.width}
                                    height={dimensions.height}
                                    className="image-canvas"
                                    ref={canvasRef}
                                />
                            </div>
                        </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Video;
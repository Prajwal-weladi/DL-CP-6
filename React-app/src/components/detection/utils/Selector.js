import React, { useContext } from 'react';
import { ModelContext } from '../context/model-context';
import Detection from '../image/Detection';
import Video from '../video/Video';
import Realtime from '../realtime/Realtime';
import './Selector.css';

// SVG Icons as React components
const ImageIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '10px'}}>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <circle cx="8.5" cy="8.5" r="1.5"></circle>
        <polyline points="21 15 16 10 5 21"></polyline>
    </svg>
);

const VideoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '10px'}}>
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
        <line x1="7" y1="2" x2="7" y2="22"></line>
        <line x1="17" y1="2" x2="17" y2="22"></line>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <line x1="2" y1="7" x2="7" y2="7"></line>
        <line x1="2" y1="17" x2="7" y2="17"></line>
        <line x1="17" y1="17" x2="22" y2="17"></line>
        <line x1="17" y1="7" x2="22" y2="7"></line>
    </svg>
);

const CameraIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '10px'}}>
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
        <circle cx="12" cy="13" r="4"></circle>
    </svg>
);

const Selector = () => {
    const { selected, selectMode } = useContext(ModelContext);

    return (
        <React.Fragment>
            <div className="top-div">
                <div className="section-div">
                    {selected === 'Image' ? (
                        <div className="selected-div" onClick={() => selectMode('Image')}>
                            <div className="selected-text">
                                <ImageIcon />
                                Upload Image
                            </div>
                        </div>
                    ) : (
                        <div className="deselected-div" onClick={() => selectMode('Image')}>
                            <div className="deselected-text">
                                <ImageIcon />
                                Upload Image
                            </div>
                        </div>
                    )}
                </div>

                <div className="section-div">
                    {selected === 'Video' ? (
                        <div className="selected-div" onClick={() => selectMode('Video')}>
                            <div className="selected-text">
                                <VideoIcon />
                                Upload Video
                            </div>
                        </div>
                    ) : (
                        <div className="deselected-div" onClick={() => selectMode('Video')}>
                            <div className="deselected-text">
                                <VideoIcon />
                                Upload Video
                            </div>
                        </div>
                    )}
                </div>

                <div className="section-div">
                    {selected === 'Realtime' ? (
                        <div className="selected-div" onClick={() => selectMode('Realtime')}>
                            <div className="selected-text">
                                <CameraIcon />
                                Open Camera
                            </div>
                        </div>
                    ) : (
                        <div className="deselected-div" onClick={() => selectMode('Realtime')}>
                            <div className="deselected-text">
                                <CameraIcon />
                                Open Camera
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="detection-container">
                {selected === 'Image' && (
                    <Detection />
                )}
                {selected === 'Video' && (
                    <Video />
                )}
                {selected === 'Realtime' && (
                    <Realtime />
                )}
            </div>
        </React.Fragment>
    )
}
export default Selector;
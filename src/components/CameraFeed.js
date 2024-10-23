import React from 'react';
import './CameraFeed.css'; 

const CameraFeed = () => {
    return (
        <div className="camera-feed">
            <h1>Camera Feed</h1>
            <div className="feed-placeholder">
                {/* live feed dapat*/}
                <p>[Camera Feed will be displayed here]</p>
            </div>
        </div>
    );
};

export default CameraFeed;

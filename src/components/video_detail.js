'use strict';

import React, { Component } from 'react';

class VideoDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.video);
        if (!this.props.video) {
            return (<div>Loading...</div>);
        }
        const videoUrl = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;

        return (
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive " src={videoUrl} />
                </div>
                <div className="detail">
                    <div>{this.props.video.snippet.title}</div>
                    <div>{this.props.video.snippet.description}</div>
                </div>
            </div>
        );
    }
}

export default VideoDetail;
import React, { Component } from 'react';

class VideoListItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const imgUrl = this.props.video.snippet.thumbnails.default.url;
        return (
            <li className="list-group-item" onClick={()=>{this.props.onVideoSelect(this.props.video)}}>
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" src={imgUrl}/>
                    </div>
                    <div className="media-body">
                        <div className="media-heading">
                        {this.props.video.snippet.title}
                        </div>
                    </div>

                </div>
            </li>
        );
    }
}



export default VideoListItem;
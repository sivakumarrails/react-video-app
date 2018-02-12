import React , {Component} from 'react';

import VideoListItem from './video_list_item';

class VideoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let listArray = this.props.videos.map((video)=>{
           return( <VideoListItem onVideoSelect = {this.props.onVideoSelect} key ={video.etag} video = {video}></VideoListItem>);
        });
        return (
            <ul className="list-group col-md-4">
               {listArray}
            </ul>

        );
    }
}


// const VideoList = (props) => {

//     var videoItems = props.videos.map((video) => {
//         console.log(video);
//         return (<VideoListItem tag={video.etag} video={video} />);
//     });



// };

export default VideoList;
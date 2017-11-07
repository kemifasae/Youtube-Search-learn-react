import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  if(!props.videos){
    return <div>Cannot see videos</div>;
  }
  const videoItems = props.videos.map((video) =>{
    return (<div>
        <VideoListItem
          onVideoSelect = {props.onVideoSelect}
          key={video.etag}
          video={video}
          />
      </div>);
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;

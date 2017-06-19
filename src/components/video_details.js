import React from 'react';

const VideoDetails = ({ video }) => {
  if (!video) {
    return (
      <h2>Loading...</h2>
    )
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-details col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe src={url} frameBorder="0" className="embed-responsive-item"></iframe>
      </div>
      <div className="details">
        <h1>{video.snippet.title}</h1>
        <h4>{video.snippet.description}</h4>
      </div>
    </div>
  )
}

export default VideoDetails;

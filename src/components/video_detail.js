import React from "react";


const VideoDetail = ({video}) => {
	if(!video){
		return <div>Loading...</div>;
	}
	const VideoId = video.id.videoid;
	const Url = `http://www.youtube.com/embed/${VideoId}`; //Don't forget the ``
	console.log(VideoId);

	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={Url} ></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};


export default VideoDetail;
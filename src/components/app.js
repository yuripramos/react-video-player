import React, { Component } from 'react';
import SearchBar from "./search_bar.js";
import YTSearch from "youtube-api-search";
import VideoList from "./video_list.js";
import VideoDetail from "./video_detail.js";

const API_KEY = "AIzaSyDcLxoV5ITj4QALt8Vuumv3LIkRu-un5pU";

export default class App extends Component {
	constructor(props){
		super(props);

		this.state = { 
			videos : [],
			selectedVideo: null
		};

		YTSearch({key:API_KEY, term: "ultra music"}, videos => {
			this.setState({
				videos:videos,
				selectedVideo: videos[0]
			});
			//this.setState({videos: videos});
		});
	}
	render() {
	    return (
	      <div>
	      	<SearchBar />
	      	<VideoDetail video = { this.state.selectedVideo } />
	      	<VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
	      	videos = {this.state.videos} />
	      </div>
	    );
	  }
}

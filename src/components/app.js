import _ from "lodash";
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import SearchBar from "./search_bar.js";
import YTSearch from "youtube-api-search";
import VideoList from "./video_list.js";
import VideoDetail from "./video_detail.js";


const API_KEY = "AIzaSyDcLxoV5ITj4QALt8Vuumv3LIkRu-un5pU";

const AUTH_TOKEN = "14958952d64da274b8cd88d5ab2ebc03f06d588cd9c2296192f697c97bdf5f73";


export default class App extends Component {
	constructor(props){
		super(props);

		this.state = { 
			videos : [],
			selectedVideo: null
		};

		this.videoSearch("surfboard");

	}
	videoSearch(term){
		YTSearch({key:API_KEY, term: term}, videos => {
			this.setState({
				videos:videos,
				selectedVideo: videos[0]

			});
			console.log(videos);
			//this.setState({videos: videos});
		});
	}
	render() {

		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

	    return (
	      <div>
	      	<SearchBar OnSearchTermChange ={videoSearch}/>
	      	<VideoDetail video = { this.state.selectedVideo } />
	      	<VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
	      	videos = {this.state.videos} />
	      </div>
	    );
	  }
}

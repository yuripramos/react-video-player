import React, { Component } from 'react';
import SearchBar from "./search_bar.js";
import YTSearch from "youtube-api-search";
import VideoList from "./video_list.js";
const API_KEY = "AIzaSyDcYsLrtZRCLGgc_17JUvTyI5QJiE8Zfa4";

export default class App extends Component {
	constructor(props){
		super(props);

		this.state = { videos : []};

		YTSearch({key:API_KEY, term: "surfboards"}, videos => {
			this.setState({videos});
			//this.setState({videos: videos});
		});
	}
	render() {
	    return (
	      <div>
	      	<SearchBar />
	      	<VideoList videos = {this.state.videos} />
	      </div>
	    );
	  }
}

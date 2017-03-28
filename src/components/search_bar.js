import React, { Component } from "react";


class SearchBar extends Component {
	constructor(props){
		super(props);
		
		this.state = { term: ""};
	}
	render(){
		return(
			<input 
			value = {this.state.term}
			onChange={event => this.OnInputChange(event.target.value)}/>
			);
	}
	OnInputChange(term){
		this.setState({term});
		this.props.OnSearchTermChange(term);
	}
};

export default SearchBar;
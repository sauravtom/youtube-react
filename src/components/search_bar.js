import React from 'react';


//functional react component
//cannot have state
const SearchBar_ = () => {
	return <input />;
}

// react class component with state
class SearchBar extends React.Component {

	// state declaration
	constructor(props){
		super(props);
		this.state = {term: ''};
	}

	render() {
		return (
			<div className="search-bar">
				<input
					placeholder="Search query!"
					value = {this.state.term} 
					onChange={event => this.onInputChange(event.target.value) }/>
			</div>
		);
	}

	onInputChange(term){
		this.setState( {term} );
		this.props.onSearchTermChange(term);
		console.log(term);
	}
	
}

export default SearchBar;

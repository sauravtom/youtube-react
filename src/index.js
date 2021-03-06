import _ from 'lodash';
import React, {Component} from 'react';
import ReactDom from 'react-dom';

import YTSearch from 'youtube-api-search';
import Searchbar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAJ7v2xCZ4klfyQpsGg9SlZXt7ljIYhE0I';


class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			videos:[],
			selectedVideo:null
		};
		this.videoSearch('tesla');
	}

	videoSearch(term){
		YTSearch({key: API_KEY, term:term}, (videos) =>{
			console.log('videos');
			console.log(videos);
			//this.setState({videos});
			this.setState({
				videos:videos,
				selectedVideo:videos[0]
			});
		});
	}

	render(){
		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
		return (
			<div>
				<Searchbar onSearchTermChange={term=>this.videoSearch(term)}/>
				<VideoDetail video={this.state.selectedVideo} /> 
				<VideoList 
					onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div>
		);
	}
}

ReactDom.render(<App />, document.querySelector('.container') );

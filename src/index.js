import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';

const API_KEY = 'AIzaSyD9zfj_U7yCW-BPkUlDCFa3EZy7t43q4f0';

YTSearch({ key: API_KEY, term: 'surfboards' }, videos => console.log(videos));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.handleChangeSearchTerm('surfboards');
  }

  handleChangeSearchTerm(term) {
    YTSearch({ key: API_KEY, term },
      videos => this.setState({
        videos,
        selectedVideo: videos[0] })
      );
  }

  render() {
    const bouncedSearch = _.debounce(term => this.handleChangeSearchTerm(term), 1000)

    return (
      <div>
        <SearchBar onChangeSearchTerm={bouncedSearch}/>
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('.container')
)

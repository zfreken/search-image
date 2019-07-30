import React,{Component} from 'react';
import SearchBar from './SearchBar/SearchBar';
import axios from 'axios';
import './app.css';
import ImageList from './image/imageList'


class App extends Component{

  state = {
    images :[]
  }

  onSearchImage = async (search) => {

    const result = await axios.get('https://api.unsplash.com/search/photos',{
        params:{
          query:search
        },
        headers : {
          Authorization:'Client-ID 89b97ac7a1279b1e4967c28ec76ebb3e3862a36ba91b4dcd3748004d109d4666'
        }
    })

    this.setState({
      images:result.data.results
    });

  }

  render(){
    return (
      <div className ='app-container'>
        <SearchBar onSearchImage={this.onSearchImage} />
         <div className='image-count-text'>{this.state.images.length} Resim bulundu.</div>
         <ImageList images={this.state.images} />
      </div>

    )
  }
};

export default App;

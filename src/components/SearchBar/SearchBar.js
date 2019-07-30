import React,{Component} from 'react';
import './SearchBar.css'

class SearchBar extends Component  {

  constructor(props){
    super(props);

    this.state = {
      search:''
    }
    this.inputChanged = this.inputChanged.bind(this);
    this.searchImage = this.searchImage.bind(this);
  }


  inputChanged(event){
    this.setState({
      search:event.target.value
    })
  }

  searchImage(){
    this.props.onSearchImage(this.state.search)
  }

  render(){
    return(
      <div className="searchbar-container ui input">
        <input type="text"
          placeholder="Search..."
          onChange={this.inputChanged}
          onKeyPress = {(e)=> {
            if (e.key === 'Enter') {
              this.searchImage();
            }
           }
          }
        />

        <button className="ui icon button"
                onClick={this.searchImage}  >
          <i className="search icon"></i>
        </button>
      </div>
     )
  }
}


export default SearchBar;

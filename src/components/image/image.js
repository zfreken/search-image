import React, { Component } from 'react';

class Image extends Component{
  constructor(props) {
    super(props);

    this.state = {
      lineCount:1
    }

    this.myRef = React.createRef();
  }


  componentDidMount(){
    console.log(this.myRef);

    this.myRef.current.addEventListener('load',()=> {
      const lineCount = Math.round(this.myRef.current.clientHeight / 5)+3;
      this.setState({
        lineCount
      })
    })

  }


  render(){
    const {image} = this.props;
    return(
      <img style ={{ gridRowEnd:`span ${this.state.lineCount}` }} ref ={this.myRef} alt ={image.id}  src={image.urls.small}    />
    )
  }
}


export default Image;

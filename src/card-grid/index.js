import React, { Component } from 'react';
import { ImageCard } from '../card-component/component';

export class ImageGrid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }
  componentDidMount() {
    fetch('http://localhost:14330/api/values')
      .then(response => response.json())
      .then(data => this.setState({ data }))
      .catch(function (error) {
        console.log('Request failed', error)
      });
  }


  render() {
    const { openModal } = this.props;
    return (
      <div className={'image-container'} >
        {
          this.state.data.map((picture, i) => (
            <ImageCard
              key={i}
              pictureSrc={picture}
              onClick={() => openModal(picture)}
            />
          ))
        }
      </div >
    )
  }
}
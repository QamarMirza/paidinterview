import React, { Component } from 'react';
import './App.css';
import { ImageCard } from './card-component/component';
import mockData from './data.json';

class App extends Component {


  render() {
    return (
      <div className={'image-container'}>

        {
          mockData.map((element, i) => (
            <ImageCard key={i} pictureSrc={element.picture} />
          ))
        }
      </div >
    );
  }
}

export default App;

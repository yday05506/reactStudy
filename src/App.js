import React from 'react';
import {ReactComponent as Good} from './feeling-good.svg'
import {ReactComponent as Nice} from './feeling-nice.svg'
import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className='card'>
        <div className='profile-image-1'><Good/></div>
        <div className='profile-image-2'><Nice/></div>
        <div className='profile-image-3'><Nice/></div>
        <div className='question-info'>
          To <strong>Mr.Good, </strong><br/>
          From <strong>Ms.Nice</strong>
        </div>
        <div className='question'>
          What's contents 📚🎮🎬 are you enjoying these days?
        </div>
        <div className='answer'>
          <strong>Ms.Nice answered </strong><br/>
          I am playing Animal Crossing New Horizon.
        </div>
      </div>
    )
  }
}

export default App;
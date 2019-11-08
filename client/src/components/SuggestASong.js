import React, { Component } from 'react';
import Modal from './Modal';
import SongList from './SongList';

export default class SuggestASong extends Component {
  render() {
    return (
      <div id='suggestASong'>
        <div className='strokes'></div>
        <div className='container'>
          <h1>Suggest A Song</h1>
          <div className='info-body'>
            <div className='body-text'>
              Help us build the perfect reception playlist!
              <span>
                Submit your dance party song ideas below and vote for the ones
                you like!
              </span>
            </div>
            <Modal />
            <SongList />
          </div>
        </div>
      </div>
    );
  }
}

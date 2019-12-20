import React, { Component } from 'react';
import Modal from './Modal';
import SongList from './SongList';
import LoadingScreen from 'react-loading-screen';

export default class SuggestASong extends Component {
  state = {
    loading: true
  };
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1000);
  }
  render() {
    const { loading } = this.state;
    return (
      <LoadingScreen
        loading={loading}
        bgColor='#fff5f4'
        spinnerColor='#cd6647'
        textColor=''
        logoSrc='../img/initials.png'
        text=''
      >
        <div id='suggestASong'>
          <div className='strokes'></div>
          <div className='container'>
            <h1>Suggest A Song</h1>
            <div className='info-body'>
              <div className='body-text'>
                Help us build the perfect playlist!
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
      </LoadingScreen>
    );
  }
}

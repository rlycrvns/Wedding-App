import React, { Component } from 'react';
import LoadingScreen from 'react-loading-screen';
import ResponsiveEmbed from 'react-responsive-embed';

export default class RSVP extends Component {
  state = {
    loading: true
  };
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1500);
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
        <div id='rsvp'>
          <div className='container'>
            <h1>RSVP</h1>
            <div className='rsvp-body'>
              <ResponsiveEmbed
                id='rsvp-form'
                src='https://rileyandjessica.app.rsvpify.com/'
                allowFullScreen
                ratio='3:4'
              />
            </div>
          </div>
        </div>
      </LoadingScreen>
    );
  }
}

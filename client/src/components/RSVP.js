import React, { Component } from 'react';
import ResponsiveEmbed from 'react-responsive-embed';

export default class RSVP extends Component {
  render() {
    return (
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
    );
  }
}

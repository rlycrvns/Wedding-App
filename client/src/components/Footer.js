import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <span>
          Built by Riley Cravens Copyright &copy; {new Date().getFullYear()}
          <span>All Rights Reserved</span>
        </span>
        <span>
          Photography by
          <span>
            <a href='https://michellebreiterphotography.com/'>
              Michelle Breiter Photography
            </a>
          </span>
        </span>
      </footer>
    );
  }
}

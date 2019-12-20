import React, { Component } from 'react';
import LoadingScreen from 'react-loading-screen';

export default class Details extends Component {
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
        <div id='details'>
          <div className='strokes'></div>
          <div className='container'>
            <h1>Details</h1>
            <div className='info-body'>
              <div className='info-block'>
                <h2>When:</h2>
                <h3>
                  <span>September 6, 2020</span>
                  <span>Arrival at 5:00 PM</span>
                  <span>Outdoor Ceremony at 5:30 PM</span>
                  <span> On Premesis Reception to Follow</span>
                </h3>
              </div>
              <div className='info-block'>
                <h2>Where:</h2>
                <h3>
                  <a href='https://goo.gl/maps/fRn59sfiuLAZudhV7'>
                    Scholl's Valley Lodge
                  </a>
                </h3>
                <h3>
                  <span>2840 SW River Road</span>
                  <span>Hillsboro, OR 97123</span>
                  <span>(Half hour from Downtown Portland)</span>
                </h3>
              </div>
              <div className='info-block'>
                <h2>Attire:</h2>
                <h3>Semi-Formal</h3>
              </div>
              <div className='info-block'>
                <h2>Food and Drink</h2>
                <h3>
                  <span>Light Meal</span>
                  <span>Beer and Wine Bar</span>
                </h3>
              </div>
              {/* <div className='info-block'>
              <h2>Registry</h2>
              <h3>
                <span>Light Meal</span>
                <span>Beer and Wine Bar</span>
              </h3>
            </div> */}
            </div>
          </div>
        </div>
      </LoadingScreen>
    );
  }
}

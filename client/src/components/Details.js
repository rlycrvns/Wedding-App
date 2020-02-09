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
                <h3>September 6, 2020</h3>
                <h3>Arrival at 5:00 PM</h3>
                <h3>Outdoor Ceremony at 5:30 PM</h3>
                <h3>Outdoor Reception to Follow On-site</h3>
              </div>
              <div className='info-block'>
                <h2>Where:</h2>
                <h3>
                  <a href='https://goo.gl/maps/fRn59sfiuLAZudhV7'>
                    Scholl's Valley Lodge
                  </a>
                </h3>
                <h3>2840 SW River Road</h3>
                <h3>Hillsboro, OR 97123</h3>
                <h3>(45 minutes from Downtown Portland)</h3>
                <h3>Parking is limited, please carpool if possible</h3>
              </div>
              <div className='info-block'>
                <h2>Accessibility</h2>
                <h3>Gravel Parking Lot</h3>
                <h3>
                  Ceremony and Reception Site are accessible without stairs
                </h3>
              </div>
              <div className='info-block'>
                <h2>Info</h2>
                <h3>
                  <span>Attire:</span>
                </h3>
                <h4>Semi-Formal</h4>
                <h4>Ceremony will be held on a lawn, beware of heels</h4>
                <h3>
                  <span>Food and Drink:</span>
                </h3>
                <h4>Appetizers followed by Light Meal</h4>
                <h4>Beer and wine bar</h4>
                <h3>
                  <span>Children:</span>
                </h3>
                <h4>
                  To allow all guests to relax and enjoy themselves, we have
                  chosen to make our special day 21+ only. We thank you for your
                  understanding.
                </h4>
                <h3>
                  <span>Unplugged Ceremony:</span>
                </h3>
                <h4>
                  We invite you to be fully present. Kindly turn off all devices
                  and enjoy this special moment with us.
                </h4>
              </div>
              <div className='info-block'>
                <h2>Registry</h2>
                <h3>
                  Check Back Once You have Received your formal invitation
                </h3>
              </div>
            </div>
          </div>
        </div>
      </LoadingScreen>
    );
  }
}

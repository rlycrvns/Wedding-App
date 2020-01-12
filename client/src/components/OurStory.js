import React, { Component } from 'react';
import Slider from './Slider';
import Views from './Views';
import LoadingScreen from 'react-loading-screen';

export default class OurStory extends Component {
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
        <div id='ourstory'>
          <div className='container'>
            <h1>Our Story</h1>
            <div className='stories'>
              <div className='story'>
                <img
                  src='/img/jessica.jpg'
                  alt="Jessica's OkCupid Profile Picture"
                />
                <div className='story-wrapper'>
                  <div className='story-date'>2016</div>
                  <div className='story-text'>
                    <p>
                      This was an incredibly life changing and transformative
                      year that I feel can’t be left out of our love story.
                    </p>
                    <p>
                      In this year I ended a relationship that was long past
                      it’s expiration date, left a job that I felt was no longer
                      where I should be, and said goodbye to the home I grew up
                      in. I was emotionally raw but absolutely determined to
                      find myself again and set out to do a lot of scary,
                      spontaneous and lively activities to help me do that.
                    </p>
                  </div>
                  <div className='story-date'>New Years 2017</div>
                  <div className='story-text'>
                    <p>
                      I brought in the new year eating Spanish food and dancing
                      to disco with some amazing friends. I reflected on the
                      experiences that made me more bold, more loving, more
                      open, more me and I promised myself that with my 25th
                      birthday coming up that year, I was going to make it the
                      best one of my life.
                    </p>
                  </div>
                  <div className='story-date'>February 2017</div>
                  <div className='story-text'>
                    <p>
                      I wasn’t in any mindset of wanting a serious relationship,
                      just dipping my toes back into the dating pool so I joined
                      OKCupid. This was an entirely overwhelming and exhausting
                      experience that I almost quit multiple times &#40;very
                      glad that didn’t happen!&#41; My profile itself didn’t
                      have a lot of information on it, and while browsing
                      through some other profiles, I came across one about a guy
                      who said he was a “vegan nerd” who dressed up in Star Wars
                      outfits. His profile photos were intimidating and I wasn’t
                      sure I would be able to date a vegan, but his profile did
                      inspire me to add “Star Wars, duh” under my movies
                      section.
                    </p>
                  </div>
                  <div className='story-date'>March 14th, 2017</div>
                  <div className='story-text'>
                    <p>
                      I got a message from that same profile that read: “You had
                      me at "Star Wars duh", want to hang out and get food and
                      or a drink&#40;not necessarily alcohol&#41;?”
                    </p>
                    <p>That guy was Riley.</p>
                  </div>
                </div>
              </div>
              <div className='story'>
                <img
                  src='/img/riley.jpg'
                  alt="Riley's OkCupid Profile Picture"
                />
                <div className='story-wrapper'>
                  <div className='story-date'>2013</div>
                  <div className='story-text'>
                    <p>
                      I packed up all of my belongings in Colorado and made a
                      new home in Portland, Oregon. I generally considered this
                      to be a gigantic mistake for the next several years.
                      Hindsight says that it was actually the best decision.
                    </p>
                  </div>
                  <div className='story-date'>2015</div>
                  <div className='story-text'>
                    <p>
                      After spending a couple years in the service industry, I
                      enrolled at Portland Community College with the goal of
                      setting myself up with a new career before I turned 30.
                    </p>
                  </div>
                  <div className='story-date'>2016</div>
                  <div className='story-text'>
                    <p>
                      A few months after ending a sour relationship, I
                      reactivated my OkCupid even though it’s what landed me in
                      said relationship. *shrug emoji* Based on past experience,
                      I wasn’t expecting much but figured I’d see who was out
                      there. I decided to move back to Colorado in December and
                      booked a Uhaul. At the last minute I got cold feet and
                      decided to stay in Portland.
                    </p>
                  </div>
                  <div className='story-date'>March 14th, 2017</div>
                  <div className='story-text'>
                    <p>
                      I came across a cute girl with a messy cascading bun next
                      to a mountain lake who self identified as a cat mom. I
                      read through the sparse, and somewhat hostile, info on her
                      profile several times. I was intimidated and enamoured. I
                      deliberated for days on whether or not to message her and
                      what I would even say. Eventually I noticed that she had
                      added “Star Wars duh” to her movies and thus, full of
                      doubt and insecurity, I sent a message… “You had me at
                      Star Wars duh”.
                    </p>
                  </div>
                  {/* <div className='story-date'>
                    May 21, 2019 9:49 am Zion National Park, Utah
                  </div>
                  <div className='story-text'>
                    <p>She said yes.</p>
                  </div> */}
                </div>
              </div>
            </div>
            <Slider />
            <Views />
          </div>
        </div>
      </LoadingScreen>
    );
  }
}

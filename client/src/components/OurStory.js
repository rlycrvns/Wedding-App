import React, { Component } from 'react';
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
            <div className='date-time'>
              March 17th, 2017 - Our journey began with our first date and the
              rest is history...
            </div>
            <div className='photos'>
              <div className='photo'>
                <img
                  loading='lazy'
                  src='/img/photos/1.jpg'
                  alt='The first night we said I Love You'
                />
                <div className='caption'>
                  The first night we said I Love You
                </div>
              </div>
              <div className='photo'>
                <img
                  loading='lazy'
                  src='/img/photos/2.jpg'
                  alt='Photobooth Experts'
                />
                <div className='caption'>Photobooth Experts</div>
              </div>
              <div className='photo'>
                <img
                  loading='lazy'
                  src='/img/photos/3.jpg'
                  alt='Moving in together<'
                />
                <div className='caption'>Moving in together</div>
              </div>
              <div className='photo'>
                <img
                  loading='lazy'
                  src='/img/photos/4.jpg'
                  alt='Our first Starlight Parade Troop together'
                />
                <div className='caption'>
                  First Starlight Parade Troop together
                </div>
              </div>
              <div className='photo'>
                <img
                  loading='lazy'
                  src='/img/photos/5.jpg'
                  alt='A surpise trip to Newport'
                />
                <div className='caption'>A surpise trip to Newport</div>
              </div>
              <div className='photo'>
                <img
                  loading='lazy'
                  src='/img/photos/6.jpg'
                  alt='First trip to Ocean Shores'
                />
                <div className='caption'>First trip to Ocean Shores</div>
              </div>
              <div className='photo'>
                <img
                  loading='lazy'
                  src='/img/photos/7.jpg'
                  alt='Our first Oregon Country Fair'
                />
                <div className='caption'>Our first Oregon Country Fair</div>
              </div>
              <div className='photo'>
                <img loading='lazy' src='/img/photos/8.jpg' alt='OCF Babes' />
                <div className='caption'>OCF Babes</div>
              </div>
              <div className='photo'>
                <img
                  loading='lazy'
                  src='/img/photos/9.jpg'
                  alt='Our First Roadtrip, Painted Hills, OR'
                />
                <div className='caption'>
                  Our First Roadtrip, Painted Hills, OR
                </div>
              </div>
              <div className='photo'>
                <img
                  loading='lazy'
                  src='/img/photos/10.jpg'
                  alt='First Wedding, Katie and John Lowry'
                />
                <div className='caption'>
                  First Wedding, Katie and John Lowry
                </div>
              </div>
              <div className='photo'>
                <img
                  loading='lazy'
                  src='/img/photos/11.jpg'
                  alt='Dance Party'
                />
                <div className='caption'>Dance Party</div>
              </div>
              <div className='photo'>
                <img
                  loading='lazy'
                  src='/img/photos/12.jpg'
                  alt="12'000 Feet Up"
                />
                <div className='caption'>12&apos;000 Feet Up</div>
              </div>
              <div className='photo'>
                <img
                  loading='lazy'
                  src='/img/photos/13.jpg'
                  alt='Engagement Spot 2 years before'
                />
                <div className='caption'>Engagement Spot - 2 years before</div>
              </div>
              <div className='photo'>
                <img
                  loading='lazy'
                  src='/img/photos/14.jpg'
                  alt='Zion National Park'
                />
                <div className='caption'>Zion National Park</div>
              </div>
              <div className='photo'>
                <img
                  loading='lazy'
                  src='/img/photos/15.jpg'
                  alt='Our first Rose City Comic-Con'
                />
                <div className='caption'>Our first Rose City Comic-Con</div>
              </div>
              <div className='photo'>
                <img
                  loading='lazy'
                  src='/img/photos/16.jpg'
                  alt='Suprise cooking class'
                />
                <div className='caption'>Suprise cooking class</div>
              </div>
              <div className='photo'>
                <img
                  loading='lazy'
                  src='/img/photos/17.jpg'
                  alt='We are good hikers'
                />
                <div className='caption'>We are good hikers</div>
              </div>
              <div className='photo'>
                <img loading='lazy' src='/img/photos/18.jpg' alt='Date night' />
                <div className='caption'>Date night</div>
              </div>
              <div className='photo'>
                <img
                  loading='lazy'
                  src='/img/photos/19.jpg'
                  alt='Dinner Date'
                />
                <div className='caption'>Dinner Date</div>
              </div>
              <div className='photo'>
                <img
                  loading='lazy'
                  src='/img/photos/20.jpg'
                  alt='First trip to Bend, OR'
                />
                <div className='caption'>First trip to Bend, OR</div>
              </div>
              <div className='photo'>
                <img loading='lazy' src='/img/photos/21.jpg' alt='Snow babes' />
                <div className='caption'>Snow babes</div>
              </div>
              <div className='photo'>
                <img
                  loading='lazy'
                  src='/img/photos/22.jpg'
                  alt='First Christmas Card'
                />
                <div className='caption'>First Christmas Card</div>
              </div>
              <div className='photo'>
                <img
                  loading='lazy'
                  src='/img/photos/23.jpg'
                  alt='First New Years Eve'
                />
                <div className='caption'>First New Years Eve</div>
              </div>
              <div className='photo'>
                <img
                  loading='lazy'
                  src='/img/photos/24.jpg'
                  alt='At the beach cabin'
                />
                <div className='caption'>At the beach cabin</div>
              </div>
              <div className='photo'>
                <img loading='lazy' src='/img/photos/25.jpg' alt='Beach Meow' />
                <div className='caption'>Beach Meow</div>
              </div>
              <div className='photo'>
                <img
                  loading='lazy'
                  src='/img/photos/26.jpg'
                  alt='1 year anniversary'
                />
                <div className='caption'>1 year anniversary</div>
              </div>
              <div className='photo'>
                <img
                  loading='lazy'
                  src='/img/photos/27.jpg'
                  alt='We like the coast okay'
                />
                <div className='caption'>We like the coast okay</div>
              </div>
              <div className='photo'>
                <img
                  loading='lazy'
                  src='/img/photos/28.jpg'
                  alt="Bryan and Cheryl's Wedding"
                />
                <div className='caption'>Bryan and Cheryl&apos;s Wedding</div>
              </div>
              <div className='photo'>
                <img
                  loading='lazy'
                  src='/img/photos/29.jpg'
                  alt='Second Starlight Troop'
                />
                <div className='caption'>Second Starlight Troop</div>
              </div>
              <div className='photo'>
                <img loading='lazy' src='/img/photos/30.jpg' alt='Nerds' />
                <div className='caption'>Nerds</div>
              </div>
              <div className='photo'>
                <img
                  loading='lazy'
                  src='/img/photos/31.jpg'
                  alt="Riley's Graduation"
                />
                <div className='caption'>Riley&apos;s Graduation</div>
              </div>
            </div>
          </div>
        </div>
      </LoadingScreen>
    );
  }
}

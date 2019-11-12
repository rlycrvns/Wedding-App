import React, { Component } from 'react';

export default class OurStory extends Component {
  render() {
    return (
      <div id='ourstory'>
        <div className='container'>
          <h1>Our Story</h1>
          <div className='timeline'>
            <div className='left-col'>
              <div className='event'>
                <div className='event-info'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
                  tenetur inventore debitis delectus, maiores est eaque
                  perspiciatis obcaecati placeat? Iusto quas iste earum quis
                  cumque est explicabo iure quidem impedit.
                </div>
              </div>
              <div className='event'>
                <div className='event-info'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  ab et deserunt sed sint esse quasi a nisi vitae voluptatibus
                  reiciendis corrupti, aliquid sequi vel sunt optio. Totam, quae
                  laudantium?
                </div>
              </div>
            </div>
            <div className='right-col'>
              <div className='event'>
                <div className='event-info'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima ab suscipit earum ipsa totam aperiam ex ullam minus
                  sint autem exercitationem quod alias nam ratione consequatur
                  voluptas, architecto commodi nemo.
                </div>
              </div>
              <div className='event'>
                <div className='event-info'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  possimus cum debitis incidunt autem temporibus blanditiis
                  natus vero eligendi. Aperiam pariatur fuga quia, ullam tempora
                  quos recusandae nesciunt qui consequuntur?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getSongs, likeSong } from '../actions/songActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SongList extends Component {
  componentDidMount() {
    this.props.getSongs();
  }

  onLikeClick = id => {
    this.props.likeSong(id);
  };

  render() {
    const { songs } = this.props.song;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className='song-list'>
            {songs.map(({ _id, title, artist, likes }) => (
              <CSSTransition key={_id} timeout={500} classNames='fade'>
                <ListGroupItem>
                  <span>{title}</span>
                  <span> By </span>
                  <span> {artist}</span>
                  <span> {likes} Likes</span>
                  <Button
                    className='like-btn'
                    color='danger'
                    size='lg'
                    onClick={this.onLikeClick.bind(this, _id)}
                  >
                    <FontAwesomeIcon icon='heart' />
                  </Button>
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  song: state.song
});

export default connect(
  mapStateToProps,
  { getSongs, likeSong }
)(SongList);

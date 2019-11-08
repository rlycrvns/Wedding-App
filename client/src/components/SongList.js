import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { getSongs, likeSong } from '../actions/songActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const heart = <FontAwesomeIcon icon={faHeart} />;

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
      <Container id='songs'>
        <ListGroup className='song-list'>
          {songs.map(({ _id, title, artist, likes }) => (
            <ListGroupItem>
              <span className='title'>{title}</span>
              <span> By </span>
              <span className='artist'> {artist}</span>
              <span className='likes'> {likes} Likes</span>
              <Button
                className='like-btn'
                size='md'
                onClick={this.onLikeClick.bind(this, _id)}
              >
                {heart}
              </Button>
            </ListGroupItem>
          ))}
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

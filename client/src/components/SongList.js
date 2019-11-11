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

  onLikeClick = (id, callBack) => {
    this.props.likeSong(id);
    callBack();
  };

  render() {
    const { songs } = this.props.song;
    return (
      <Container id='songs'>
        <ListGroup className='song-list'>
          {songs.map(({ _id, title, artist, likes }) => (
            <ListGroupItem>
              <div className='row1'>
                <span className='title'>{title}</span>
                <span className='by'>By</span>
                <span className='artist'>{artist}</span>
              </div>
              <div className='row2'>
                <span className='likes'> {likes} Likes</span>
                <Button
                  className='like-btn'
                  size='md'
                  onClick={this.onLikeClick.bind(
                    this,
                    _id,
                    this.props.getSongs
                  )}
                >
                  {heart}
                </Button>
              </div>
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

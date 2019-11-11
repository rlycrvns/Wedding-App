import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addSong, getSongs } from '../actions/songActions';

class SongModal extends Component {
  state = {
    modal: false,
    name: ''
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  sortList = () => this.props.getSongs();

  onSubmit = e => {
    e.preventDefault();

    const newSong = {
      title: this.state.title,
      artist: this.state.artist
    };

    // Add Song via addSong action
    this.props.addSong(newSong);

    // Close modal
    this.toggle();

    setTimeout(() => this.sortList(), 4000);
  };

  render() {
    return (
      <div className='submit-block'>
        <Button className='modalBtn mx-auto' outline onClick={this.toggle}>
          Submit a Song
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add To Song List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='title'>Song Title</Label>
                <Input
                  type='text'
                  name='title'
                  id='title'
                  placeholder='Enter a Song Title'
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='artist'>Artist</Label>
                <Input
                  type='text'
                  name='artist'
                  id='artist'
                  placeholder='Enter an Artist Name'
                  onChange={this.onChange}
                />
              </FormGroup>
              <div className='notice'>
                List will auto sort by likes after 4 seconds
              </div>
              <Button className='modalBtn mx-auto' outline block>
                Submit
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  song: state.song
});

export default connect(
  mapStateToProps,
  { addSong, getSongs }
)(SongModal);

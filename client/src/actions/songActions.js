import axios from 'axios';
import { GET_SONGS, ADD_SONG, LIKE_SONG, SONGS_LOADING } from './types';

export const getSongs = () => dispatch => {
  dispatch(setSongsLoading());
  axios
    .get('/api/songs')
    .then(res =>
      dispatch({
        type: GET_SONGS,
        payload: res.data
      })
    )
    .catch(err => console.log(err.response.data, err.response.status));
};

export const addSong = song => dispatch => {
  axios
    .post('/api/songs', song)
    .then(res =>
      dispatch({
        type: ADD_SONG,
        payload: res.data
      })
    )
    .catch(err => console.log(err.response.data, err.response.status));
};

export const likeSong = id => dispatch => {
  axios
    .put(`/api/songs/likes/${id}`)
    .then(res =>
      dispatch({
        type: LIKE_SONG,
        payload: { id, likes: res.data }
      })
    )
    .catch(err => console.log(err.response.data, err.response.status));
};

export const setSongsLoading = () => {
  return {
    type: SONGS_LOADING
  };
};

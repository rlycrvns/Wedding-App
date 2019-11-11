import {
  GET_SONGS,
  ADD_SONG,
  LIKE_SONG,
  SONGS_LOADING
} from '../actions/types';

const initialState = {
  songs: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        songs: action.payload,
        loading: false
      };
    case ADD_SONG:
      return {
        ...state,
        songs: [action.payload, ...state.songs]
      };
    case LIKE_SONG:
      return {
        ...state,
        songs: state.songs.map(song =>
          song._id === action.payload.id
            ? { ...song, likes: action.payload.likes }
            : song
        )
      };
    case SONGS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}

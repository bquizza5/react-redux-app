import axios from 'axios';
import { connect } from 'react-redux';

export const FETCH_CHARACTERS_START = 'FETCH_CHARACTERS_START';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';
export const FETCH_CHARACTERS_FAIL = 'FETCH_CHARACTERS_FAIL';

export const getCharacter = (nextPage) => dispatch => {
  dispatch({ type: FETCH_CHARACTERS_START });
  axios
    .get(nextPage)
    .then(res =>
    // console.log(res.data.next)
      dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: res.data })
    )
    .catch(err => dispatch({ type: FETCH_CHARACTERS_FAIL, payload: err }))
};


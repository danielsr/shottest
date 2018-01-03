import axios from 'axios';
import { FETCH_SHOTS } from './types';

export const fetchShots = list => async dispatch => {
  const res = await axios.get('https://api.dribbble.com/v1/shots?access_token=6ed972085fecb7078ef53a3056562c05de38514ebd7d095b6a84f6dba7743031&list=' + list);
  dispatch({ type: FETCH_SHOTS, payload: res.data });
};

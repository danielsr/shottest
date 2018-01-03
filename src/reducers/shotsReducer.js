import { FETCH_SHOTS } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_SHOTS:
      return action.payload;
    default:
      return state;
  }
};

import { combineReducers } from 'redux';
import shotsReducer from './shotsReducer';

export default combineReducers({
  shots: shotsReducer
});

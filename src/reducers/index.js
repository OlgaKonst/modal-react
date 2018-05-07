import { combineReducers } from 'redux';
import formReducer from './formReducer';
import popupReducer from './popupReducer';

const rootReducer = combineReducers({ formReducer, popupReducer });
export default rootReducer;

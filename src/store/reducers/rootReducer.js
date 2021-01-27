import { combineReducers } from 'redux';
import authReducer from './authReducer';
import projectReducer from './projectReducer';


const rootReducer = combineReducers({
    auh: authReducer, 
    project: projectReducer
});

export default rootReducer;
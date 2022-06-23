import { combineReducers } from 'redux';
import eventReducer from '../components/Event/eventReducer';
import contactReducer from '../components/Friend/contactReducer';


const rootReducer = combineReducers({
	eventR: eventReducer,
	friendR: contactReducer
})

export default rootReducer;
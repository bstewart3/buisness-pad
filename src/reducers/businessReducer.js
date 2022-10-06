import _ from 'lodash';
import {
FETCH_BUSINESS,
FETCH_BUSINESSES,
CREATE_BUSINESS,
EDIT_BUSINESS,
DELETE_BUSINESS
} from '../actions/types';

 const businessReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_BUSINESSES:
            
            return {...state, ..._.mapKeys(action.payload, 'id' )}
        case FETCH_BUSINESS:
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_BUSINESS:
            return {...state, [action.payload.id]: action.payload };
        case EDIT_BUSINESS:
            return {...state, [action.payload.id]: action.payload};
        case DELETE_BUSINESS:
            return _.omit(state, action.payload)    

        default:
            return state
    }
}

export default businessReducer
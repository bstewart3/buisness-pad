import _ from 'lodash';
import {
FETCH_business,
FETCH_businessES,
CREATE_business,
EDIT_business,
DELETE_business
} from '../actions/types';

 const businessReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_businessES:
            
            return {...state, ..._.mapKeys(action.payload, 'id' )}
        case FETCH_business:
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_business:
            return {...state, [action.payload.id]: action.payload };
        case EDIT_business:
            return {...state, [action.payload.id]: action.payload};
        case DELETE_business:
            return _.omit(state, action.payload)    

        default:
            return state
    }
}

export default businessReducer
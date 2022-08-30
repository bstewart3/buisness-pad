import _ from 'lodash';
import {
FETCH_BUISNESS,
FETCH_BUISNESSES,
CREATE_BUISNESS,
EDIT_BUISNESS,
DELETE_BUISNESS
} from '../actions/types';

 const buisnessReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_BUISNESSES:
            
            return {...state, ..._.mapKeys(action.payload, 'id' )}
        case FETCH_BUISNESS:
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_BUISNESS:
            return {...state, [action.payload.id]: action.payload };
        case EDIT_BUISNESS:
            return {...state, [action.payload.id]: action.payload};
        case DELETE_BUISNESS:
            return _.omit(state, action.payload)    

        default:
            return state
    }
}

export default buisnessReducer
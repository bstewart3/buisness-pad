import firebase from '../apis/firebase'
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_BUISNESS,
    FETCH_BUISNESS,
    FETCH_BUISNESSES,
    EDIT_BUISNESS, 
    DELETE_BUISNESS
    } from "./types";

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId

    };
};


export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};


export const createBuisness = formValues => async (dispatch) => {
        const response = await firebase.post('/buisnesses.json', formValues);
        
        dispatch({ type: CREATE_BUISNESS, payload: JSON.parse(response.config.data)})
    }


export const fetchBuisness = (id) => async dispatch => {
        const response = await firebase.get(`/buisnesses/${id}.json`)

        dispatch ({ type: FETCH_BUISNESS, payload: response.data})
    };


export const fetchBuisnesses = () => async dispatch => {
    const response = await firebase.get('/buisnesses.json');

    dispatch({ type: FETCH_BUISNESSES, payload: response.data})
};


export const editBuissness = (id, formValues) => async dispatch =>  {
    const response = await firebase.put(`/buisnesses/${id}`, formValues);

    dispatch({ type: EDIT_BUISNESS, payload: response.data})
};


export const deleteBuisnes = (id) => async dispatch => {
    await firebase.delete(`buisnesses/${id}`)

    dispatch({ type: DELETE_BUISNESS, payload: id})
};




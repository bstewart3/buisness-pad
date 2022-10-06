import firebase from '../apis/firebase';
import history from '../history';
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_business,
    FETCH_business,
    FETCH_businessES,
    EDIT_business, 
    DELETE_business
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


export const createbusiness = formValues => async (dispatch) => {
        const userId = localStorage.getItem('userId');
        const id = JSON.stringify(Date.now())
        const response = await firebase.put(`/businesses/${id}.json`, { ...formValues, userId } );
        
        dispatch({ type: CREATE_business, payload: JSON.parse(response.config.data)})

        history.push('/')
    }


export const fetchbusiness = (id) => async dispatch => {
        const response = await firebase.get(`/businesses/${id}.json`)

        dispatch ({ type: FETCH_business, payload: response.data})
    };


export const fetchbusinesses = () => async dispatch => {
    const response = await firebase.get('/businesses.json');

    dispatch({ type: FETCH_businessES, payload: response.data})
};


export const editbusiness = (id, formValues) => async dispatch =>  {
    const response = await firebase.patch(`/businesses/${id}.json`, formValues);

    dispatch({ type: EDIT_business, payload: response.data})
    history.push('/')
};


export const deletebusiness = (id) => async dispatch => {
    await firebase.delete(`businesses/${id}.json`)

    dispatch({ type: DELETE_business, payload: id})
    history.push('/')
};




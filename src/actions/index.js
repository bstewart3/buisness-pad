import firebase from '../apis/firebase';
import history from '../history';
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_BUSINESS,
    FETCH_BUSINESS,
    FETCH_BUSINESSES,
    EDIT_BUSINESS, 
    DELETE_BUSINESS
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


export const createBusiness = formValues => async (dispatch) => {
        const userId = localStorage.getItem('userId');
        const id = JSON.stringify(Date.now())
        const response = await firebase.put(`/businesses/${id}.json`, { ...formValues, userId } );
        
        dispatch({ type: CREATE_BUSINESS, payload: JSON.parse(response.config.data)})

        history.push('/')
    }


export const fetchBusiness = (id) => async dispatch => {
        const response = await firebase.get(`/businesses/${id}.json`)

        dispatch ({ type: FETCH_BUSINESS, payload: response.data})
    };


export const fetchBusinesses = () => async dispatch => {
    const response = await firebase.get('/businesses.json');

    dispatch({ type: FETCH_BUSINESSES, payload: response.data})
};


export const editBusiness = (id, formValues) => async dispatch =>  {
    const response = await firebase.patch(`/businesses/${id}.json`, formValues);

    dispatch({ type: EDIT_BUSINESS, payload: response.data})
    history.push('/')
};


export const deleteBusiness = (id) => async dispatch => {
    await firebase.delete(`businesses/${id}.json`)

    dispatch({ type: DELETE_BUSINESS, payload: id})
    history.push('/')
};




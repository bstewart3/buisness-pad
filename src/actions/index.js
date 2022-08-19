// import { createAsyncThunk } from "@reduxjs/toolkit";

export const signIn = (userId) => {
    return {
        type: 'SIGN_IN',
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    };
};

// export const createBuisness = async (formValues) =>  {
    
    
//     const response = await fetch(`https://buisnesspad-default-rtdb.firebaseio.com/users/${userId}.json`, {
//         method: 'POST',
//         body: JSON.stringify(formValues)
//     })
//     if (!response.ok) {
//         const error = new Error(response.message || 'Failed to post');
//         throw error;
//     }

    
// };

// export const createBuisness = createAsyncThunk('CREATE_BUISNESS', async (formValues) => {
//     const response = await fetch(`https://buisnesspad-default-rtdb.firebaseio.com/users/.json`, {
//         method: 'POST',
//         body: JSON.stringify(formValues)
//     })
//     if (!response.ok) {
//         const error = new Error(response.message || 'Failed to post');
//         throw error;
//     }

    
//     return {
//         type: 'CREATE_BUISNESS',
//         payload: JSON.stringify(response)
//     };
// })

export const fetchBuisness = () => {
    return {
        type: 'FETCH_BUISNESS'
    };
};
export const fetchBuisnesses = () => {
    return {
        type: 'FETCH_BUISNESSES'
    };
};


export const editBuissness = () => {
    return {
        type: 'EDIT_BUISNESS'
    };
};
export const deleteBuisnes = () => {
    return {
        type: 'DELETE_BUISNESS'
    };
};




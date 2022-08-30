import React from "react";
import Modal from "../Modal";


const BuisnessDelete =  () => {
    const actions = (
        <div>
            <button className="ui button negative">Delete</button>
            <button className="ui button">Cancel</button>
        </div>
    );
    return (
        <div>
            BuisnessDelete
            <Modal
                title="Delete This Buisness Idea"
                content="Are you sure you want to delete this buisness idea?"
                actions={actions}
            />
        </div>
    );
};


export default BuisnessDelete;
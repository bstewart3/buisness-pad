import React from "react";
import { connect } from "react-redux";
import { createbusiness } from '../../actions';
import businessForm from './businessForm';

class businessCreate extends React.Component {
    onSubmit = (formValues) => {
        const formValuesWithId = {
            id: Date.now(),
            ...formValues
        }
        this.props.createbusiness(formValuesWithId)
    }

    render() {
        return(
            <div className="card">
                <h3>Add a business idea</h3>
                <businessForm onSubmit={this.onSubmit}/>
            </div>
        ) 
    }
}

export default connect(null, { createbusiness })(businessCreate);
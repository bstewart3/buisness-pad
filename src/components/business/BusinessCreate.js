import React from "react";
import { connect } from "react-redux";
import { createBusiness } from '../../actions';
import BusinessForm from './BusinessForm';

class businessCreate extends React.Component {
    onSubmit = (formValues) => {
        const formValuesWithId = {
            id: Date.now(),
            ...formValues
        }
        this.props.createBusiness(formValuesWithId)
    }

    render() {
        return(
            <div className="card">
                <h3>Add a business idea</h3>
                <BusinessForm onSubmit={this.onSubmit}/>
            </div>
        ) 
    }
}

export default connect(null, { createBusiness })(businessCreate);
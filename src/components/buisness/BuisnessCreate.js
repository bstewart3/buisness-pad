import React from "react";
import { connect } from "react-redux";
import { createBuisness } from '../../actions';
import BuisnessForm from './BuisnessForm';

class BuisnessCreate extends React.Component {
    onSubmit = (formValues) => {
        const formValuesWithId = {
            id: Date.now(),
            ...formValues
        }
        this.props.createBuisness(formValuesWithId)
    }

    render() {
        return(
            <div>
                <h3>Add a buisness idea</h3>
                <BuisnessForm onSubmit={this.onSubmit}/>
            </div>
        ) 
    }
}

export default connect(null, { createBuisness })(BuisnessCreate);
// import _ from 'lodash';
import React from "react";
import { connect } from  'react-redux';
import { fetchBuisness, editBuisness } from '../../actions';
import BuisnessForm from './BuisnessForm';
import { Link } from "react-router-dom";

class BuisnessEdit extends React.Component{
    
    componentDidMount() {
        this.props.fetchBuisness(JSON.parse(this.props.match.params.id));
    }

    onSubmit = (formValues) => {

        this.props.editBuisness(this.props.match.params.id, formValues)
        
    }

    render() {
        if(!this.props.buisness){
            return <div>Loading...</div>
        }
        return (
            <div className="card">
                <Link to="/"><i className="large middle aligned icon arrow circle left"></i></Link>
                <h3>Edit your Buisness Idea</h3>
                <BuisnessForm
                onSubmit={this.onSubmit}
                />
            </div>
        )
        
    }
}
const mapState = (state, ownProps) => {
    return { buisness: state.buisnesses[ownProps.match.params.id]}
}

export default connect(mapState, {fetchBuisness, editBuisness })(BuisnessEdit);
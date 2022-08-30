// import _ from 'lodash';
import React from "react";
import { connect } from  'react-redux';
import { fetchBuisness, editBuisness } from '../../actions';
import BuisnessForm from './BuisnessForm';

class BuisnessEdit extends React.Component{
    
    componentDidMount() {
        this.props.fetchBuisness(JSON.parse(this.props.match.params.id));
    }

    onSubmit = (formValues) => {

        this.props.editBuisness(this.props.match.params.id, formValues)
        
    }

    render() {
        console.log(this.props.buisness)
        if(!this.props.buisness){
            return <div>Loading...</div>
        }
        return (
            <div>
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
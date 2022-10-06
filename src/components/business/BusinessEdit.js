// import _ from 'lodash';
import React from "react";
import { connect } from  'react-redux';
import { fetchbusiness, editbusiness } from '../../actions';
import businessForm from './businessForm';
import { Link } from "react-router-dom";

class businessEdit extends React.Component{
    
    componentDidMount() {
        this.props.fetchbusiness(JSON.parse(this.props.match.params.id));
    }

    onSubmit = (formValues) => {

        this.props.editbusiness(this.props.match.params.id, formValues)
        
    }

    render() {
        if(!this.props.business){
            return <div>Loading...</div>
        }
        return (
            <div className="card">
                <Link to="/"><i className="large middle aligned icon arrow circle left"></i></Link>
                <h3>Edit your business Idea</h3>
                <businessForm
                onSubmit={this.onSubmit}
                />
            </div>
        )
        
    }
}
const mapState = (state, ownProps) => {
    return { business: state.businesses[ownProps.match.params.id]}
}

export default connect(mapState, {fetchbusiness, editbusiness })(businessEdit);
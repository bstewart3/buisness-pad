import React from "react";
import Modal from "../Modal";
import history from '../../history';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchbusiness, deletebusiness } from "../../actions";




class businessDelete extends React.Component {
    componentDidMount() {
        this.props.fetchbusiness(this.props.match.params.id)
    }


    renderActions() {
        const id = this.props.match.params.id
        return (
            <>
                <button onClick={() => this.props.deletebusiness(id)} className="ui button negative">Delete</button>
                <Link to='/' className="ui button">Cancel</Link>
            </>
        );
    }


    renderContent() {
        if(!this.props.business) {
            return 'Are you sure you want to delete this business?'
        }

        return `Are you sure you want to delete your business idea: ${this.props.business.title}`
    }

    render(){
        return (

                <Modal
                    title="Delete This business Idea"
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                />

        );
    }
};

const mapState = (state, ownProps) => {
    return { business: state.businesses[ownProps.match.params.id] }
}



export default connect(mapState, { fetchbusiness, deletebusiness } )(businessDelete);
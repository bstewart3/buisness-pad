import React from "react";
import Modal from "../Modal";
import history from '../../history';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBuisness, deleteBuisness } from "../../actions";




class BuisnessDelete extends React.Component {
    componentDidMount() {
        this.props.fetchBuisness(this.props.match.params.id)
    }


    renderActions() {
        const id = this.props.match.params.id
        return (
            <>
                <button onClick={() => this.props.deleteBuisness(id)} className="ui button negative">Delete</button>
                <Link to='/' className="ui button">Cancel</Link>
            </>
        );
    }


    renderContent() {
        if(!this.props.buisness) {
            return 'Are you sure you want to delete this Buisness?'
        }

        return `Are you sure you want to delete your buisness idea: ${this.props.buisness.title}`
    }

    render(){
        return (

                <Modal
                    title="Delete This Buisness Idea"
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                />

        );
    }
};

const mapState = (state, ownProps) => {
    return { buisness: state.buisnesses[ownProps.match.params.id] }
}



export default connect(mapState, { fetchBuisness, deleteBuisness } )(BuisnessDelete);
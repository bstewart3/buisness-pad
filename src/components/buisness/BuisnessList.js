
import React from "react";
import { connect } from "react-redux";
import { fetchBuisnesses } from "../../actions";

class BuisnessList extends React.Component {
    componentDidMount() {
        this.props.fetchBuisnesses()
    }


    renderList() {
        console.log(this.props.buisnesses)
        return this.props.buisnesses.map(buisness => {
            return (
                <div className="item" key={buisness.id}>
                    <i className="large middle aligned icon building"></i>
                    <div className="content">
                        {buisness.formValues.title}
                        <div className="description">
                            {buisness.formValues.description}
                        </div>
                    </div>
                </div>
            )
        })
    }


    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        )
    }
}


const mapState = (state) => {
    return { buisnesses: Object.values(state.buisnesses)}
}

export default connect(mapState, { fetchBuisnesses })(BuisnessList);
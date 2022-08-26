import React from "react";
import { Field, reduxForm } from "redux-form"
import { connect } from "react-redux";
import { createBuisness } from '../../actions'

class BuisnessCreate extends React.Component {
    renderError({ error, touched}) {
        if(touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }


    renderInput = ({ input, label, meta }) => {
        
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                <div>{this.renderError(meta)}</div>
            </div>
            

                
        )
    }

    onSubmit = (formValues)=>{
        const formValuesWithId = {
            id: Date.now(),
            formValues
        }
        this.props.createBuisness(formValuesWithId)
        
    }


    render() {
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error" >
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description" component={this.renderInput} label="Enter Description"/>
                <button className="ui button primary">Submit</button>
            </form>
        ) 
    }
}

const validate = (formValues) => {
    const errors = {}

    if (!formValues.title) {
        errors.title = 'You must enter a title.'
    }

    if (!formValues.description) {
        errors.description = 'You must enter a description.'
    }

    return errors;
}




const formWrapped = reduxForm({
    form: 'buisnessCreate',
    validate
})(BuisnessCreate);

export default connect(null, { createBuisness })(formWrapped);
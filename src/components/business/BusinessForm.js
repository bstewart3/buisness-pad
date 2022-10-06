import React from "react";
import { Form, Field } from "react-final-form";

    const StreamForm = (props) => {
    const renderError = ({ error, touched }) => {
        if (touched && error) {
        return (
            <div className="ui error message">
            <div className="header">{error}</div>
            </div>
        );
        }
    };
    
    const renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? "error" : ""}`;
        return (
        <div className={className}>
            <label>{label}</label>
            <input {...input} autoComplete="off" />
            {renderError(meta)}
        </div>
        );
    };
    
    const onSubmit = (formValues) => {
        props.onSubmit(formValues);
    };
    
    return (
        <Form
        initialValues={props.initialValues}
        onSubmit={onSubmit}
        validate={(formValues) => {
            const errors = {};
    
            if (!formValues.title) {
            errors.title = "Enter a name for your business.";
            }
    
            if (!formValues.description) {
            errors.description = "Enter a description for you idea.";
            }
            if (!formValues.valueProp) {
                errors.valueProp = "Enter a unique Value Proposition for your business.";
            }
            if (!formValues.customers) {
                errors.customers = "Enter your potential customers.";
            }
            if (!formValues.mvp) {
                errors.mvp = "Enter a description of your MVP(Minimum Viable Product)";
            }
            return errors;
        }}
        render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className="ui form error">
            <Field
                name="title"
                component={renderInput} 
                label="Enter Your business Name or Idea." 
            />
            <Field
                name="description"
                component={renderInput}
                label="What does this business do?"
            />
            <Field
                name="valueProp"
                component={renderInput}
                label="Whats a unique value proposition for this business?"
            />
            <Field
                name="customers"
                component={renderInput}
                label="Who are the customers of this business?"
            />
            <Field
                name="mvp"
                component={renderInput}
                label="Whats needed to create an MVP for this idea?"
            />
            <button className="ui button primary">Submit</button>
            </form>
        )}
        />
    );
    };
    
export default StreamForm;
import React from "react"
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';

import { signIn } from "../../actions/index";
class SignIn extends React.Component {
  renderError({ touched, error }) {
    if (error && touched) {
      return <div >{error}</div>
    }
  }
  renderField=(props)=>{
      return(
          <>
          <div style={{ display:'flex' }}>
              
            <label style={{ margin: 'auto', display: 'block' }} htmlFor={props.label} >{props.label}</label>&nbsp;&nbsp;
            <input  type={props.type} {...props.input} />
          </div>
          <div style={{ color:'red',textAlign:'center' }} >{this.renderError(props.meta)}</div>
          </>
      );
  }
  onSubmit=(formValues)=>{
      this.props.signIn(formValues)
  }
  render() {
    return (
      <div className="container-signin" >
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} >
      <h3>Admin Login</h3><br/>
          <Field type="text" name="email" label="Email" component={this.renderField} size="30" />
          <Field type="password" name="password" label="Password" component={this.renderField} size="30" />
        <button  className="button button-grey" type="submit" >SignIn</button>
      </form>
      </div>
    )
  }
}
const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 8 || values.password.length>15) {
    errors.password = 'Must be 8 characters or less than 15'
  }
  return errors
}

export default 

connect(null, { signIn } )(reduxForm({
    form:'ProductForm',
    validate
})(SignIn));
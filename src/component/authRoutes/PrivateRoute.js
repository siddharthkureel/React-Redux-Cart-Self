import React from 'react'
import { Route,Redirect } from 'react-router-dom';

import { connect } from "react-redux";
const PrivateRoute = (props) => {
  const {
    user,
    component: Comp
  } = props;
  return (
    <Route component={()=>(
      (user) ? <Comp {...props} />:<Redirect to="/signin"/>
    )}/>
  )
}


const mapStateToProps = (state) => {
  return {
    user: state.signIn.user
  }
}
export default connect(mapStateToProps, null)(PrivateRoute);

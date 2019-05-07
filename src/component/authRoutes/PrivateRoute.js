import React from 'react'
import { Route,Redirect } from 'react-router-dom';

import { connect } from "react-redux";
const PrivateRoute = ({
  user,
  component:Comp
}) => {
  return (
    <Route component={()=>(
      (user) ? <Comp>It worked</Comp>:<Redirect to="/signin"/>
    )}/>
  )
}


const mapStateToProps = (state) => {
  return {
    user: state.signIn.user
  }
}
export default connect(mapStateToProps, null)(PrivateRoute);

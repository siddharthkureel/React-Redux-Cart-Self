import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { firebase } from "../../firebase";
import history from "../../history";
const Header = (props) => {
  const logoutHandler = async() => {
    document.getElementById('sidenav').style.display='initial'
    await firebase.auth().signOut().then(() => {
    }).catch(error => {
      console.log(error)
    })
    history.push('/');
  }
  return (
      <ul>
          <div style={{ display:'flex',justifyContent:'center' }} >
          {!(props.user)?
          <li><Link to="/">Home</Link></li>
          :
          <li><Link to="/" onClick={logoutHandler} >Logout</Link></li>
          }
          <li><Link to="/signin">Admin</Link></li>    
          </div>
      </ul>
  )
}
const mapStateToProps=(state)=>{
  return{
    user:state.signIn.user
  }
}
export default connect(mapStateToProps,null)(Header);

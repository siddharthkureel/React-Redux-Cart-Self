import React from 'react'
import Header from "../component/Navigation/Header";
import ShoppingCart from '../component/ShoppingCart.js';
const Layout = (props) => {
  return (
    <>
      <Header/>
      <ShoppingCart/>
      {props.children}
    </>
  )
}

export default Layout
 
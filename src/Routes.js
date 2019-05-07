import React from 'react'
import { Route,Switch } from "react-router-dom";

import Layout from "./HOC/Layout";
import Home from "./component/Home";
import AddProduct from "./component/Admin/AddProduct";
import EditProduct from "./component/Admin/EditProduct";
import ProductList from "./component/Admin/ProductList";
import SignIn from "./component/Admin/SignIn/index";
import PrivateRoute from "./component/authRoutes/PrivateRoute";
const Routes = (props) => {
  return (
    <Layout >
        <Switch>
          <PrivateRoute exact path="/product" component={ProductList}  />
          <PrivateRoute exact path="/product/edit/:id" component={EditProduct} />
          <PrivateRoute exact path="/product/add" component={AddProduct} />
          <Route exact path="/signin" component={SignIn}/>
          <Route exact path="/" component={Home} />
        </Switch>
    </Layout>
  )
}

export default Routes

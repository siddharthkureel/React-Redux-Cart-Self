import React, { Component } from 'react'
import { connect } from "react-redux";
import ProductForm from './ProductForm';
import { addProduct } from "../actions/index";
import AdminLayout from './../../HOC/AdminLayout';
class AddProduct extends Component {
  onSubmit=(formValues)=>{
  this.props.addProduct(formValues)
  }
  render() {
    return (
      <AdminLayout>
        <ProductForm onSubmit={this.onSubmit} />
      </AdminLayout>
    )
  }
}
export default connect(null,{addProduct})(AddProduct);
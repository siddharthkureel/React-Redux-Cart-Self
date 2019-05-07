import React from 'react'
import { connect } from "react-redux";
import AdminLayout from '../../HOC/AdminLayout';
import ProductForm from './ProductForm';
import { showProduct,editProduct } from "../actions/index";
class EditProduct extends React.Component {
  componentWillMount=async()=>{
    await this.props.showProduct(this.props.match.params.id)
  }
  onSubmit = (formValues)=>{
    this.props.editProduct(formValues,this.props.match.params.id)
  }
  render() {
    if(!this.props.product){
      return null
    }else{
      return (
        <AdminLayout>
          <ProductForm id={this.props.match.params.id} initialValues={this.props.product} onSubmit={this.onSubmit} />
        </AdminLayout>
      )
    }
  }
}
const mapStateToProps=(state,ownProps)=>{
  return{
    product:state.products[ownProps.match.params.id]
  }
}
export default connect(mapStateToProps,{showProduct,editProduct})(EditProduct)
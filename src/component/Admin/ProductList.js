import React, { Component } from 'react'
import { connect } from "react-redux";
import { showProducts } from "../actions/index";
import AdminLayout from '../../HOC/AdminLayout';
import { Link } from "react-router-dom";
import DeleteProduct from './DeleteProduct';
class ProductList extends Component {
  state={
    toggle:false
  }
    componentWillMount(){
      this.props.showProducts()
    }
    toggle=(e)=>{
     
     this.setState({
       toggle:true
     })
    }
    renderProducts=(data)=>{
      if(data.products){
      return data.products.map((product,i)=>(
        <tr key={i}>
          <td>{product.name}</td>
          <td>{product.description}</td>
          <td>{product.price}</td>
          <td><img src={product.imageUrl} alt={product.name}/></td>
          <td><div>
            <Link to={`/product/edit/${product.id}`} className="button button-blue" >Edit</Link>
            <DeleteProduct id={product.id} ></DeleteProduct>
            </div></td>
        </tr>
      ))
      }else if(!data.products){
        return <tr>
          <td>loading....Please wait</td>
          <td>loading....Please wait</td>
          <td>loading....Please wait</td>
          <td>loading....Please wait</td>
          <td>loading....Please wait</td>
        </tr>
      }
    }
  render() {
    return (
        <AdminLayout>
        <Link to='/product/add' className="button button-blue" >Add Product</Link>
        <br /><br />
          <div style={{ overflowX:'auto' }} >
            <table>
              <thead>
              <tr>
                <th>Name</th>
                <th>Decription</th>
                <th>Price</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
              </thead>
              <tbody>
              {this.renderProducts(this.props.products)}
            </tbody>
            </table>
          </div>
        </AdminLayout>
    )
  }
}
const mapStateToProps=(state)=>{
    return {
      products:state.products
    }
}
export default connect(mapStateToProps,{showProducts})(ProductList);


import React, { Component } from 'react'
import { connect } from "react-redux";
import { showProducts } from "../actions/index";
import Product from './Product';
class Home extends Component {

  renderList=(products)=>{
    return products.map(product => {
      return <Product
        key={product.id}
        name={product.name}
        description={product.description}
        imageUrl={product.imageUrl}
        imageName={product.imageName}
        price={product.price}
        id={product.id}
      />
    })
  }
  componentDidMount() {
    this.props.showProducts()
  }
  render() {
    if(!this.props.products){
      return <div>Loading</div>
    }else{
      return <div className="products-container">{this.renderList(this.props.products)}</div>
    }
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products.products
  }
}
export default connect(mapStateToProps, { showProducts })(Home);
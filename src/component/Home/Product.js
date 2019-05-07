import React, { Component } from 'react';
import { connect } from "react-redux";
import { addToCart } from "../actions/index";
class Product extends Component {
    
  render() {
      const {price,name,description,imageUrl,imageName} =this.props;
    return (
        <div className="product-card">
            <div className="badge">Hot</div>
            <div className="product-tumb">
                <img className="image" src={`${imageUrl}`} alt={`${imageName}`}/>
		</div>
            <div className="product-details">
                <div className="product-price">{name}</div><br/>
                <p>&nbsp;&nbsp;&nbsp;<span style={{ color: 'white' }}>${price}</span> {description}</p>
                <div className="product-bottom-details">
                    <div className="product-links">
                        <button className="button button-red" onClick={()=>this.props.addToCart(this.props)}>Add To Cart&nbsp;&nbsp;<i className="fa fa-shopping-cart"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
const mapStateToProps=(state)=>{
    return {
        cart: state.addToCart
    }
}
export default connect(mapStateToProps,{addToCart})(Product);
import React, { Component } from 'react'
import { connect } from "react-redux";
import { deleteProduct } from "../actions/index";
class DeleteProduct extends Component {
    state = {
        toggle: false
    }
    toggle = () => {

        this.setState({
            toggle: true
        })
    }
    deleteProduct(id) {
        this.props.deleteProduct(id)
    }
  render() {
      const {id}=this.props;
    return (
        <>
          {(!this.state.toggle) ?
              <button id='delete-button' onClick={this.toggle} className="button button-tomato" >
                  Delete
            </button>
              :
              <button id='delete-button' className="button button-red" onClick={() => this.deleteProduct(id)} >
                  Confirm
            </button>
            }
        </>
    )
  }
}
export default connect(null,{deleteProduct})(DeleteProduct);

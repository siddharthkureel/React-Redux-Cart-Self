import React from 'react'
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { deleteFromCart } from "./actions/index";
class ShoppingCart extends React.Component {
    
    render(){
        const {items,total,count} = this.props.cart;
        return ReactDOM.createPortal(
            <div id="mySidenav" className="sidenav">
                <span id='count' style={style1} onClick={openNav}>{!count?0:count}</span>
                <span className="closebtn" style={{ color: 'white', cursor: "pointer" }} onClick={closeNav}>close</span>
                <>
                    {(!items)?
                    <span className="text">Add Items to cart</span>
                    :
                    <div>
                       {items.map((item,i)=>(
                           <div key={i} className="text">
                               {item.name}&nbsp;&nbsp;
                               Quantity:{item.quantity}&nbsp;&nbsp;
                               ${item.price}
                               <button className="button button-red" onClick={() => this.props.deleteFromCart(item.id)} >X</button>
                            </div>
                       ))}
                    </div>
                    }
                    <span className="text">Total ${total}</span>
                </>
            </div>,
            document.querySelector('#sidenav')
        )
    }
}
const mapStateToProps = (state) => {
    return {
        cart: state.addToCart
    }
}
export default connect(mapStateToProps, { deleteFromCart})(ShoppingCart);

const style1 = { 
    fontSize: "30px", 
    cursor: "pointer", 
    padding: '2px 10px',
    position:'fixed',
    color:'black',
    border:'1px solid black'
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("count").style.display = "initial";
}

function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    document.getElementById("count").style.display="none";
}


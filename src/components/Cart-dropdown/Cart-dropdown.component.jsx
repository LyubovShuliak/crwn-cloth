import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import "./Cart-dropdown.style.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../Cart-item/Cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.secectors";


const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">

    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem}></CartItem>
        ))
      ) : (
        <span className="empty-massage">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECK OUT
    </CustomButton>
 
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

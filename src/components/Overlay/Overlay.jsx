import React from "react";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { connect } from "react-redux";
import "./Overlay.scss";
import CartDropdownComponent from "../Cart-dropdown/Cart-dropdown.component";

const Overlay = ({ toggleCartHidden }) => (
  <div className="Overlay" onClick={toggleCartHidden}>
    <CartDropdownComponent />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null,mapDispatchToProps)(Overlay);

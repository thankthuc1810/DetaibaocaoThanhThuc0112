import React from "react";

import ContentCart from "../pages/cart/Content";
import Contentend from "../pages/cart/Content2";
function Cart(props){
    return(
        <div className="container">
            <ContentCart/>
           <Contentend/>
        </div>
    );
}
export default Cart
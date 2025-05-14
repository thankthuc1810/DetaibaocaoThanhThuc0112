import React from "react";

import SettingsContent from "../pages/Settings/SettingsContent";
import SettingsTop from "../pages/SettingsTop/SettingsTop";
function Cart(props){
    return(
        <div className="container">
            <SettingsContent/>
           <SettingsTop/>
        </div>
    );
}
export default Cart
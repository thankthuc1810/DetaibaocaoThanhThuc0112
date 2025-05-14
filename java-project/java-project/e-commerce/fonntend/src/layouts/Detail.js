import React from "react";
import Section1 from "../pages/detail/Section1";
import Section2 from "../pages/detail/Section2";
import SectionSubcribe from "../pages/detail/SectionSubcribe";
import SectionHeader from "../pages/detail/SectionHeader";
function Detail(props){
    return(
        <div class="container">
            <SectionHeader/>
            <Section1/>
            <Section2/>
            <SectionSubcribe/>
        
        </div>
    );
}
export default Detail
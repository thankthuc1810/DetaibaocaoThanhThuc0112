import React from "react";
import Slider from "../pages/home/Slider"
import Deal from "../pages/home/Deal"
import Apparel from "../pages/home/Apparel";
import Electronics from "../pages/home/Electronics";
import Request from "../pages/home/Request";
import Item from "../pages/home/Items";
import Service from "../pages/home/Services";
import Region from "../pages/home/Region";
import Subscribe from "../pages/home/Subscribe";
import Slider1 from "../pages/home/Slider1";
import Items1 from "../pages/home/Items1";


function Home(props){
    return(
        <div class="container">
            <Slider/>
            <Slider1/>
            <Deal/>
            <Apparel/>
            
            {/* <Electronics/> */}
            <Items1/>
            {/* <Request/> */}
            
            <Item/>
            <Service/>
         
            <Subscribe/>
        </div>
    );
}
export default Home
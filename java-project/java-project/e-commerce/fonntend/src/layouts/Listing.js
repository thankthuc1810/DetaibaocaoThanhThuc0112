import React from "react";
import ListingTop from "../pages/listing/ListingTop";
import ListingSection from "../pages/listing/ListingSection";
function Listing(props){
    return(
        <section class="section-content padding-y">
        <div className="container">

        <ListingTop/>
        <ListingSection/>
        </div>
        </section>
    )
}
export default Listing
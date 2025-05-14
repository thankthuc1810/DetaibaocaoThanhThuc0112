import React from "react";
import {Routes,Route,Link} from 'react-router-dom'
import Home from "./Home"
import Detail from "./Detail";
import Detail1 from "./Detail1";
import Detail2 from "./Detail2";
import Category from "./Category";
import Category1 from "./Category1";
import Category3 from "./Category3";
import Category4 from "./Category4";
import Category5 from "./Category5";
import Category7 from "./Category7";
import Category8 from "./Category8";
import Register from "./Register";
import Login from "./Login";
import Cart from "./Cart";
import Seller from "./Seller";
import Wishlists from "./Wishlists";
import Payments from "./Payments";
import Order from "./Order";
import Offer from "./Offer";
import Address from "./Address";
import Listing from "./Listing";
import Profile from "./Profile.js";





const Main =()=>(
    <main>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/detail" element={<Detail/>}/>
            <Route path="/detail1" element={<Detail1/>}/>
            <Route path="/detail2" element={<Detail2/>}/>
            <Route path="/category" element={<Category/>}/>      
            <Route path="/category1" element={<Category1/>}/>
            <Route path="category3" element={<Category3/>} />
            <Route path="category4" element={<Category4/>} />
            <Route path="category5" element={<Category5/>} />
            <Route path="category7" element={<Category7/>} />
            <Route path="category8" element={<Category8/>} />

            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/seller" element={<Seller/>}/>
            <Route path="/wishlists" element={<Wishlists/>}/>
            <Route path="/payments" element={<Payments/>}/>
            <Route path="/order" element={<Order/>}/>
            <Route path="/offer" element={<Offer/>}/>
            <Route path="/address" element={<Address/>}/>
            <Route path="/listing" element={<Listing/>}/>
            <Route path="/profile" element={<Profile/>}/>


        </Routes>
    </main>
)
export default Main
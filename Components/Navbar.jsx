import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const {cart} = useSelector((state) => state)
    return (
        <div className="mb-8">
           <nav className="flex  justify-between items-center h-20 max-w-6xl mx-auto">
                <NavLink to="/">
                    <div className="ml-5">
                      <img src="../logo.png" width="120px" height="40px"/>
                    </div>
                 </NavLink>  
                 <div className="flex items-center   text-slate-100 mr-5 space-x-6 ">
                   <NavLink to="/">
                      <p>Home</p>
                   </NavLink>
                   <NavLink to="/cart">
                      <div className="relative">
                          <TiShoppingCart className="text-2xl"/>
                          {
                            cart.length > 0 &&
                            <span
                            className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex
                            justify-center items-center animate-bounce rounded-full text-white">{cart.length}</span>
                          }
                      
                      </div>
                   </NavLink>
                 </div>
           </nav>
        </div>
    )
};

export default Navbar;
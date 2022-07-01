import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  const { isLogged, setIsLogged } = props
  
  const onLogout = () => {
    setIsLogged(false)
    //localStorage.removeItem("isLogin");
    //localStorage.removeItem("user");
    localStorage.setItem("isLogin" ,false)  // opetion
  };




  return (
    <div>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        {!isLogged ? (
          <li>
            <NavLink to="/">Login</NavLink>
          </li>
        ) : (
          <li>
            <NavLink to="/" onClick={onLogout}>
              Logout
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavBar;

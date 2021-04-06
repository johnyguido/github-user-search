import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const NavBar = () => (
   <header className="site-header">
      <h1 className="site-header-title">
         <NavLink to="/" exact>
            Bootcamp DevSuperior
            </NavLink>
      </h1>

   </header>
)

export default NavBar;
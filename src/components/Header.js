import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/header.css'

const Header = () => (
    <header className="header">
        <h1>Régi idők időjárása</h1>
        <div className="links">
            <NavLink to="/" activeClassName="is-active"  exact={true} className="headerTitel">Bemutatkozás </NavLink>
            <NavLink to="/daily" activeClassName="is-active"  exact={true} className="headerTitel">Napok </NavLink>
            <NavLink to="/monthly" activeClassName="is-active"  exact={true} className="headerTitel">Hónapok </NavLink>
        </div>
        
    </header>




);

export default Header;
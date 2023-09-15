import React from 'react'
import { Link } from 'react-router-dom';

const NavItem = ({ pathname, text}) => {
    let c = "nav-link";
    if (window.location.pathname === pathname) {
        c += " active";
    }

  return (
    <li className="nav-item">
        <Link to={pathname} className={c}>{text}</Link>
    </li>
  )
}

export default NavItem;
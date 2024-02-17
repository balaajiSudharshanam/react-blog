import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuopen, setMenuopen] = useState(false);

  const toggleMenu = () => {
    setMenuopen(!menuopen);
  };

  return (
    <div className='navbar'>
      <Link to='/'>
        <h1 className="nav-title">BS</h1>
      </Link>
      <div className="menu" onClick={toggleMenu}>
        <span></span><span></span><span></span>
      </div>
      <ul className={menuopen ? 'open' : 'close'}>
        <li><Link to='/works'>Works</Link></li>
        <li><Link to='/react-practise'>React practise</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;

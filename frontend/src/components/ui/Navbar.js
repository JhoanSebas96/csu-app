import React, { useState } from 'react'
import logo from '../../assets/CSUYOPAL.png'
import { Link } from 'react-router-dom'
import { LinkItems } from '../LinkItems';
import './Navbar.css';


export const Navbar = () => {

  const [click, setClick] = useState(false);
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <nav className='nav-bar'>
        <img 
          className='logo'
          src={logo} 
          alt='logo'
        />
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fi fi-br-cross': 'fi fi-br-menu-burger'}></i>
        </div>
        <ul className={ click ? 'nav-menu active': 'nav-menu'}>
          {LinkItems.map((item, index) => {
            return (
              <li key={ index }>
                <Link className='nav-links' to={ item.url } onClick={ closeMobileMenu }>
                  { item.title }
                </Link>
              </li>
            )
          })
          }
        </ul>
      </nav>
    </>
  )
}
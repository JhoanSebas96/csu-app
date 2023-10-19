import React, { useEffect, useState } from 'react'
import logoFooter from '../../assets/footer.png'
import footer960 from '../../assets/footer960.png';
import './Footer.css'
import { Link } from 'react-router-dom'
import { BsWhatsapp, BsFacebook, BsGeoAltFill, BsInstagram } from 'react-icons/bs';
import { LinkItems } from '../LinkItems.js'
import { ContactItems } from "../ContactItems";




export const Footer = () => {


  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth < 960);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='footer'>
      {!smallScreen ? (
        <img src={logoFooter} className='logo-footer' alt='CSU-AREANDINA' />
      ) : (
        <img src={footer960} className='logo-footer' alt='CSU-AREANDINA' />
      )
      }
      <ul className='foot-icons'>
        <a href='https://www.facebook.com/csuareandina' ><BsFacebook className='foot-icon' /></a>
        <a href='https://www.instagram.com/areandina_casanare_arauca/'><BsInstagram className='foot-icon' /></a>
        <a href='http://api.whatsapp.com/send?phone=573208752152'> <BsWhatsapp className='foot-icon'/> </a>
      </ul>
      <div className='foot-items'>
        <ul className='foot-links'>
          {LinkItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className='footer-link' to={item.url}> {item.title} </Link>
              </li>
            )
          })}
        </ul>
        <ul className='contact-items'>
          { ContactItems.map((contact, index) => {
            return (
              <div className='contact-item' key={ index }>
                <h3>{ contact.title }</h3>
                <p> <BsGeoAltFill className='icon-foot'/>{ contact.add }</p>
                <p><BsWhatsapp className='icon-foot'/> { contact.phone }</p>
              </div>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

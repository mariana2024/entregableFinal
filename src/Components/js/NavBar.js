import React from 'react'
import SkinMary from '../data/SkinMary.jpg'
import Styles from '../css/NavBar.module.css'

const Navbar = () => {
  return (
    <nav className={Styles.nav}>
        <a href='#principal'>Principal</a>
        <a href='#skintypes'>Tipos de piel</a>
        <img src={SkinMary} alt='imagen logo' className={Styles.LogoImg}></img>
        <a href='#cuidados'>Cuidados</a>
        <a href='#footer'>Contacto</a>
    </nav>
  )
}

export default Navbar
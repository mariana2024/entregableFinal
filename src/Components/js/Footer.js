import React from 'react'
import SkinMary from '../data/SkinMary.jpg'
import Styles from '../css/Footer.module.css'
import facebook from '../data/facebook.png'
import instagram from '../data/instagram.png'
import whatsapp from '../data/whatsapp.png'

const Footer = () => {
  return (
    <footer id='footer' className={Styles.FooterContainer}>
        <img src={SkinMary} alt='footerimg'></img>
        <div className={Styles.wigdetfootercontainer}>
            <div className={Styles.footerwidget}>
                <img src={facebook} alt='facebook'></img>
                <a href="http://www.facebook.com">@SkinMary</a>
            </div>
            <div className={Styles.footerwidget}>
                <img src={instagram} alt='instagram'></img>
                <a href="http://www.instagram.com">@SkinMary</a>
            </div>
            <div className={Styles.footerwidget}>
                <img src={whatsapp} alt='whatsapp'></img>
                <a href="https://wa.link/8vhcnt">3172528893</a>
            </div>
        </div>
   </footer>
  )
}

export default Footer
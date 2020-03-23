import React from 'react'
import logo from '../Img/logo.png'
import logoBbc from '../Img/logo-bbc.png'
import logoBi from '../Img/logo-bi.png'
import logoForbes from '../Img/logo-forbes.png'
import logoTech from '../Img/logo-techcrunch.png'

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Nexter Logo" className="header__logo"/>
      <h3 className="heading-3">Your own home</h3>
      <h1 className="heading-1">The ultimate personal freedom</h1>
      <button className="btn header__btn">View our properties</button>
      <div className="header__seenon-text">Seen on</div>
      <div className="header__seenon-logos">
        <img src={logoBbc} alt="Logo BBC"/>
        <img src={logoBi} alt="Logo Bi"/>
        <img src={logoForbes} alt="Logo Forbes"/>
        <img src={logoTech} alt="Logo Tech"/>
      </div>
    </header>
  )
}

export default Header
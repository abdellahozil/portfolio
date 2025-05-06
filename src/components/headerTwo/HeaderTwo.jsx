import React, { useState } from 'react'
import "./headertwo.css"

const HeaderTwo = () => {
    // change background header 
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        if(this.scrollY >= 80) header.classList.add("scroll-header")
            else header.classList.remove("scroll-header")
    })
    const [showMenu, setShowMenu] = useState(false)
    const [activNav, setActivNav] = useState("#home")
  return (
    <header className="header">
      <nav className="nav container">
        <a href="#a" className="nav__logo__two text-cs">Herri</a>
        <div className="nav__menu">
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" onClick={() => setActivNav(("#home"))} className={activNav === "#home" ? "nav__link active__link" : "nav__link"}> Home</a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" className={activNav === "#about" ? "nav__link active__link" : "nav__link"} onClick={() => setActivNav(("#about"))}>About</a>
                    </li>
                    <li className="nav__item">
                        <a href="#skills" className={activNav === "#Skills" ? "nav__link active__link" : "nav__link"} onClick={() => setActivNav(("#Skills"))}>Skills</a>
                    </li>
                    <li className="nav__item">
                        <a href="#services" className={activNav === "#services" ? "nav__link active__link" : "nav__link"} onClick={() => setActivNav(("#services"))}>Services</a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className={activNav === "#contact" ? "nav__link active__link" : "nav__link"} onClick={() => setActivNav(("#contact"))}>Contact</a>
                    </li>
                </ul>
            </div>
        <div className={`${showMenu ? "nav__menu__two show-menu" : "nav__menu__two"}`}>
          <div className="nav__data__two">
              <ul className="nav__list__two">
                    <li className="nav__item__two">
                        <a href="#home" className="nav__link__two" onClick={() => setShowMenu(!showMenu)} >
                            <i className="uil uil-estate nav__icon__two"></i> Home
                        </a>
                    </li>
                    <li className="nav__item__two">
                        <a href="#about" className="nav__link__two" onClick={() => setShowMenu(!showMenu)}>
                            <i className="uil uil-user nav__icon__two"></i> About
                        </a>
                    </li>
                    <li className="nav__item__two">
                        <a href="#skills" className="nav__link__two" onClick={() => setShowMenu(!showMenu)}>
                            <i className="uil uil-file-alt nav__icon__two"></i> Skills
                        </a>
                    </li>
                    <li className="nav__item__two">
                        <a href="#services" className="nav__link__two">
                            <i className="uil uil-briefcase-alt nav__icon__two"></i> Services
                        </a>
                    </li>
                    <li className="nav__item__two">
                        <a href="#contact" className="nav__link__two" onClick={() => setShowMenu(!showMenu)}>
                            <i className="uil uil-message nav__icon__two"></i> Contact
                        </a>
                    </li>
              </ul>
          </div>
          <div className="nav__close">
              <i className='uil uil-times nav__close' onClick={() => setShowMenu(!showMenu)}></i>
          </div>
        </div>
        <div className="nav__btns">
          <div className="theme__toggle">
              <i class='bx bx-sun'></i>
          </div>
          <div className="nav__toggle__two"  onClick={() => setShowMenu(!showMenu)} >
              <i className='uil uil-apps'></i>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default HeaderTwo

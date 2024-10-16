import { NavLink } from "react-router-dom"
import logo from "/images/logo.svg"
import  "./Header.scss"
import { useMobileMenu } from "./hook/useMobileMenu"


const Header = () => {
    const { isMobileMenuOpen, setIsMobileMenuOpen, mobileCloseMenu } = useMobileMenu()

    return (
        <header className={`header ${isMobileMenuOpen ? 'active-menu' : ''}`}>

            <nav className="nav">
                <figure className="nav__figure">
                    <img src={logo} alt="Photosnap logo" className="nav__figure-logo"/>
                </figure>

                <ul className="nav__ul">
                    <li>
                        <NavLink to="/" className="nav__ul-link" onClick={mobileCloseMenu}>home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/stories" className="nav__ul-link" onClick={mobileCloseMenu}>stories</NavLink>
                    </li>
                    <li>
                        <NavLink to="features" className="nav__ul-link" onClick={mobileCloseMenu}>features</NavLink>
                    </li>
                    <li>
                        <NavLink to="pricing" className="nav__ul-link" onClick={mobileCloseMenu}>pricing</NavLink>
                    </li>
                    <li>
                        <a href="#" className="nav__ul-link nav__ul-link--btn" onClick={mobileCloseMenu}>get an invite</a>
                    </li>
                </ul>

                <button className="nav__hamburger" aria-label="Open / close mobile menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <span className="nav__hamburger-line nav__hamburger-line--one"></span>
                    <span className="nav__hamburger-line nav__hamburger-line--two"></span>
                    <span className="nav__hamburger-line nav__hamburger-line--three"></span>
                </button>
            </nav>
            <div className="background" onClick={mobileCloseMenu}></div>
        </header>
    )
}

export default Header
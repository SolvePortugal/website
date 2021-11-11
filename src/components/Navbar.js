import React ,{useState, useEffect}from 'react'
import {Link} from 'react-router-dom'
import { isMobile } from 'react-device-detect';
import './Navbar.css';


function Navbar() {
    const[click,setClick]=useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [showNav,setShowNav]= useState(true);
    const [scrollPos,setScrollPos]= useState(0);


    function handleScroll(){
        setScrollPos(document.body.getBoundingClientRect().top);
        setShowNav(document.body.getBoundingClientRect().top> scrollPos);

    }
    useEffect(() => {
        window.addEventListener('scroll',handleScroll);
        return () => {
            window.removeEventListener('scroll',handleScroll);
        }
    })
   
    return (
        <>        
           <nav className={ isMobile ? 'navbar' : `${'navbar'} ${showNav ? 'show-navbar' :  'hide-navbar'}`}>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                <img src={`${process.env.PUBLIC_URL}/images/Logo.png`} alt="logo"/>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />                 
                </div>
                <ul className={click ? "nav-menu active": "nav-menu"}>
                <li className="nav-item">
                    <Link to="/info" className="nav-links" onClick={closeMobileMenu}>
                        Quem Somos
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/contacts" className="nav-links" onClick={closeMobileMenu}>
                        Contactos
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/projects" className="nav-links" onClick={closeMobileMenu}>
                        Projetos
                    </Link>
                </li>
                </ul>
            </div>
           </nav> 
        </>
    )
}

export default Navbar

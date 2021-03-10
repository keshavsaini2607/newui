import React,{useState} from 'react'
import './Navbar.css'

const Navbar = () => {

    const [navbar, setNavbar] = useState(false);

    const changeNavbarColor = () => {
        if(window.scrollY >= 10) {
          setNavbar(true)
        }else {
          setNavbar(false)
        }
      }
    
      window.addEventListener('scroll', changeNavbarColor)

    const Navbar = () => {
        return (
            <div className={navbar ? 'navbar actNavbar' : 'navbar'}>
                <div className="nav__logo">
                    <span>QuantaVid</span>
                </div>
                <div className="nav__list">
                    {navbar && <span>Create Video</span>}
                    <span>Blog</span>
                    <span>Upgrade</span>
                    <span>Contact Us</span>
                </div>
                <div className="login__box">
                    <button>Login/Signup</button>
                </div>
            </div>
        )
    }

    return (
        <div className={navbar ? 'navbar__main actNav': 'navbar__main'}>
            <Navbar />
        </div>
    )
}

export default Navbar

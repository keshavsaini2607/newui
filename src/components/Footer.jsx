import React from 'react'
import './Footer.css'

const Footer = () => {

    const footer = () => {
        return (
            <div className="footer">
                <div className="footer__up">
                    <div className="footer__explore">
                        <span id="footer__heading">Explore</span>
                        <span>Create Video</span>
                        <span>Blog</span>
                    </div>
                    <div className="footer__help">
                        <span id="footer__heading">Help</span>
                        <span>Contact us</span>
                    </div>
                    <div className="social__media">
                        <span id="footer__heading">Social Media</span>
                        <div className="social__media__icons">
                            <a style={{textDecoration: "none"}} href="https://www.linkedin.com/company/quantavid-usa/" className="linkedin"><i className="fab fa-linkedin">{" "}</i></a>
                            <a style={{textDecoration: "none"}} href="https://www.instagram.com/quantavidllc/" className="linkedin instagram"><i className="fab fa-instagram">{" "}</i></a>
                        </div>
                    </div>
                </div>
                <div className="footer__down">
                    <span id="footer__main__heading">QuantaVid LLC</span>
                    <span>Copyright QuantaVid &copy;{ new Date().getFullYear()}</span>
                </div>
            </div>
        )
    }

    return (
        <div className="footer__main">
            {footer()}
        </div>
    )
}

export default Footer

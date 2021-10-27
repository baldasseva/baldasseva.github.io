import React from "react"
import './Header.scss'

function Header(){
    return (
        <div id="footer">
            <div className="flex" id="footer-flex">
                <div>
                    <h1 >Eva Baldasseroni</h1>
                    <h2>Frontend Developer & Engineer</h2>
                </div>
                <div id="social-media-container">
                    <div id="twitter-tag" className="tag">Twitter</div>
                    <div id="instagram-tag" className="tag">Instagram</div>
                    <div id="linkedin-tag" className="tag">LinkedIn</div>
                </div>
            </div>
        </div>
    )
}

export default Header
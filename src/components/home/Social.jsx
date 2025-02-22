import React from "react";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            
            <a href="https://www.linkedin.com/in/nitharshan-c-v/" className="home__social-icon" target="_blank">
                <FiLinkedin />
            </a>
            <a href="https://www.github.com/Nitharshan-C-V" className="home__social-icon" target="_blank">
                <FiGithub />
            </a>
            <a href="https://www.instagram.com/suraj_nitharshan/?utm_source=qr#" className="home__social-icon" target="_blank">
                <FiInstagram />
            </a>
            
        </div> 
    ); 
}

export default Social;
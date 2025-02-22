import React, { useState } from 'react';
import './services.css';
import { HiOutlineClipboardList, HiOutlineArrowSmRight, HiOutlineCheckCircle, HiX } from 'react-icons/hi';
import Tilt from "react-parallax-tilt"; 

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
    <section className="services section" id="services">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Education</span>
    
        <div className="services__container container grid">
            {/* <Tilt options={{ max: 25, scale: 1.05, speed: 400 }}> */}
                <div className="services__content">
                    <div style={{ textAlign: 'center' }}>
                        <img 
                            src="https://i.pinimg.com/736x/ae/74/cf/ae74cf180aae5ea110b5cb59ce82ab0a.jpg"
                            alt="UCB Logo"
                            className="logo-image" // Update class name here
                        />
                        <h3 className="services__title"> University of Colorado, Boulder</h3>
                        <h3> Master of Science</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(1)}>
                        Data Science
                    </span>
                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <HiX onClick={() => toggleTab(0)} className="services__modal-close" />
                            <h3 className="services__modal-title">Course Work</h3>
                           
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        Data Mining 
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        Machine Learning
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        Customer Analytics
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        Data Centre Scale Computing
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        Computer Vision
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            {/* </Tilt> */}

            {/* <Tilt options={{ max: 25, scale: 1.05, speed: 400 }}> */}
                <div className="services__content">
                    <div style={{ textAlign: 'center' }}>
                        <img 
                            src="https://media.licdn.com/dms/image/v2/C560BAQGpxHXqqlY6qg/company-logo_200_200/company-logo_200_200/0/1630663835804/madras_institute_of_technology_logo?e=2147483647&v=beta&t=LXLCUlNjj0SNBl4qKkKTybVsiGcHBRMWN4bj86m_BAQ"
                            alt="BITS Pilani Logo"
                            className="logo-image" // Update class name here
                        />
                        <h3 className="services__title"> Madras Institute of Technology</h3>
                        <h3> Bachelors of Engineering</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(2)}>
                        Computer Science & Engineering
                    </span>
                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <HiX onClick={() => toggleTab(0)} className="services__modal-close" />
                            <h3 className="services__modal-title">Course Work</h3>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        Database Management System
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        Machine Learning
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        Image Processing
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        Cloud Computing
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        Natural Language Processing
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        Complier Design
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        Data Structures and Algorithm
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">
                                        Computer Networks
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <HiOutlineCheckCircle className="services__modal-icon" />
                                    <p className="services__modal-info">
                                      Operating Systems
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
        
    </section>
  );
}

export default Services;
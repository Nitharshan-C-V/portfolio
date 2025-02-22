import React, { useState } from 'react';
import { HiOutlineArrowSmRight, HiX, HiOutlineCheckCircle } from "react-icons/hi";
import { FaGithub } from "react-icons/fa"; 
import Tilt from "react-parallax-tilt";

const ProjectItems = ({ item }) => {
    const [toggleState, setToggleState] = useState(0); // Initialize state for modal toggle

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <Tilt
            options={{
                max: 10,
                scale: 1.02,
                speed: 400,
            }}
            className="project__card"
            key={item.id}
        >
            {/* GitHub Icon */}
            <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project__github-icon"
            >
                <FaGithub />
            </a>

            <img className="project__img" src={item.image} alt={item.title} />
            <h1 className="project__title">{item.title}</h1>
            <div className="project__tech-stack">
                {item.techStack.map((tech, index) => (
                    <span key={index} className="project__tech">{tech}</span>
                ))}
            </div>
            <p> 
               {item.description} 
            </p>
          
            <span className="project__button" onClick={() => toggleTab(1)}>
                Show More.. <HiOutlineArrowSmRight className="project__button-icon" />
            </span>
            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <HiX onClick={() => toggleTab(0)} className="services__modal-close" />
                    <h3 className="services__modal-title">{item.title}</h3>
                    {/* <p className="services__modal-description">
                        {item.description} 
                    </p> */}

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <HiOutlineCheckCircle  />
                            <p className="services__modal-info">
                                {item.point1}
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <HiOutlineCheckCircle  />
                            <p className="services__modal-info">
                                {item.point2}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </Tilt>
    );
}

export default ProjectItems;
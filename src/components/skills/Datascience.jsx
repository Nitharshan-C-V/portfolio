
import React from "react";
import { FaPython, FaDatabase, FaRProject, FaCode, FaTable, FaChartLine, FaRegChartBar, FaGitAlt } from "react-icons/fa"; // Import relevant icons
import { SiNumpy, SiPandas, SiPlotly } from "react-icons/si";
import Tilt from "react-parallax-tilt"; // Import Tilt

const DataScience = () => {
    return (
        <Tilt
            options={{
                max: 25, // Maximum tilt angl
                scale: 1.05, // Scale when hovering
                speed: 400, // Speed of tilt
            }}
            className="skills__content"
        >
            <h2 className="skills__title">Data Science Skills</h2>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <FaPython />
                        <div>
                            <h3 className="skills__name">Python</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <FaDatabase />
                        <div>
                            <h3 className="skills__name">SQL</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <FaRProject />
                        <div>
                            <h3 className="skills__name">R</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <SiNumpy />
                        <div>
                            <h3 className="skills__name">NumPy</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <SiPandas />
                        <div>
                            <h3 className="skills__name">Pandas</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <SiPlotly />
                        <div>
                            <h3 className="skills__name">Matplotlib</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </Tilt>
    );
}

export default DataScience;
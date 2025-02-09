import React from "react";
import { FaMicrosoft, FaAws, FaFileExcel } from "react-icons/fa"; // For Microsoft Excel and AWS
import { SiPowerbi, SiTableau, SiGoogleanalytics, SiIbm } from "react-icons/si"; // For Power BI, Tableau, Google Analytics, IBM Cloud
import { RiFileExcel2Line } from "react-icons/ri";
import Tilt from "react-parallax-tilt"; // Import Tilt

const CloudTools = () => {
    return (
        <Tilt
            options={{
                max: 25, // Maximum tilt angle
                scale: 1.05, // Scale when hovering
                speed: 400, // Speed of tilt
            }}
            className="skills__content"
        >
            <h3 className="skills__title">Cloud & Visualization Tools</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <RiFileExcel2Line />
                        <div>
                            <h3 className="skills__name">Microsoft Excel</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <SiPowerbi />
                        <div>
                            <h3 className="skills__name">Power BI</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <SiTableau />
                        <div>
                            <h3 className="skills__name">Tableau</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <FaAws />
                        <div>
                            <h3 className="skills__name">AWS</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <SiGoogleanalytics />
                        <div>
                            <h3 className="skills__name">Google Analytics</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <SiIbm />
                        <div>
                            <h3 className="skills__name">IBM Cloud</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                </div>
            </div>
        </Tilt>
    );
}

export default CloudTools;
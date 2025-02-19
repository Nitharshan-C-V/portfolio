// import React, { useState } from "react";
// import "./qualification.css";
// import { HiOutlineAcademicCap, HiOutlineBriefcase, HiOutlineCalendar } from "react-icons/hi";

// const Qualification = () => {
//     const [toggleState, setToggleState] = useState(1)

//     const toggleTab = (index) => {
//         setToggleState(index);
//     };
  
//     return (
//     <section className="qualification section">
//         <h2 className="section__title">Qualification</h2>
//         <span className="section__subtitle">My Journey</span>

//         <div className="qualification__container container">
//             <div className="qualification__tabs">
//                 <div className={toggleState === 1 ? "qualification__button button--flex qualification__active" 
//                     : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
//                     <HiOutlineAcademicCap className="qualification__icon" />
//                     Education
//                 </div>
//                 <div className={toggleState === 2 ? "qualification__button button--flex qualification__active" 
//                     : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
//                     <HiOutlineBriefcase className="qualification__icon" />
//                     Experience
//                 </div>
//             </div>

//             <div className="qualification__sections">
//                 <div className={toggleState === 1 ? "qualification__content qualification__content-active"
//                     : "qualification__content"}>
//                     <div className="qualification__data">
//                         <div>
//                             <h3 className="qualification__title">Design</h3>
//                             <span className="qualification__subtitle">The Art Institute</span>
//                             <div className="qualification__calendar">
//                                 <HiOutlineCalendar className="qualification__calendar-icon" />
//                                 2016-2018
//                             </div>
//                         </div>
//                         <div>
//                             <span className="qualification__rounder"></span>
//                             <span className="qualification__line"></span>
//                         </div>
//                     </div>
//                     <div className="qualification__data">
//                         <div></div>
//                         <div>
//                             <span className="qualification__rounder"></span>
//                             <span className="qualification__line"></span>
//                         </div>
//                         <div>
//                             <h3 className="qualification__title">Web Development</h3>
//                             <span className="qualification__subtitle">Full Sail University</span>
//                             <div className="qualification__calendar">
//                                 <HiOutlineCalendar className="qualification__calendar-icon" />
//                                 2018-2021
//                             </div>
//                         </div>
//                     </div>
//                     <div className="qualification__data">
//                         <div>
//                             <h3 className="qualification__title">UI/UX Design</h3>
//                             <span className="qualification__subtitle">UX Academy</span>
//                             <div className="qualification__calendar">
//                                 <HiOutlineCalendar className="qualification__calendar-icon" />
//                                 2021-2022
//                             </div>
//                         </div>
//                         <div>
//                             <span className="qualification__rounder"></span>
//                             <span className="qualification__line"></span>
//                         </div>
//                     </div>
//                 </div>
//                 <div className={toggleState === 2 ? "qualification__content qualification__content-active"
//                     : "qualification__content"}>
//                     <div className="qualification__data">
//                         <div>
//                             <h3 className="qualification__title">Tech Support</h3>
//                             <span className="qualification__subtitle">PC Outlet</span>
//                             <div className="qualification__calendar">
//                                 <HiOutlineCalendar className="qualification__calendar-icon" />
//                                 2012-2015
//                             </div>
//                         </div>
//                         <div>
//                             <span className="qualification__rounder"></span>
//                             <span className="qualification__line"></span>
//                         </div>
//                     </div>
//                     <div className="qualification__data">
//                         <div></div>
//                         <div>
//                             <span className="qualification__rounder"></span>
//                             <span className="qualification__line"></span>
//                         </div>
//                         <div>
//                             <h3 className="qualification__title">Junior Developer</h3>
//                             <span className="qualification__subtitle">Discord</span>
//                             <div className="qualification__calendar">
//                                 <HiOutlineCalendar className="qualification__calendar-icon" />
//                                 2015-2016
//                             </div>
//                         </div>
//                     </div>
//                     <div className="qualification__data">
//                         <div>
//                             <h3 className="qualification__title">UX Designer</h3>
//                             <span className="qualification__subtitle">Apple Inc</span>
//                             <div className="qualification__calendar">
//                                 <HiOutlineCalendar className="qualification__calendar-icon" />
//                                 2016-2022
//                             </div>
//                         </div>
//                         <div>
//                             <span className="qualification__rounder"></span>
//                             <span className="qualification__line"></span>
//                         </div>
//                     </div>
//                     <div className="qualification__data">
//                         <div></div>
//                         <div>
//                             <span className="qualification__rounder"></span>
//                             <span className="qualification__line"></span>
//                         </div>
//                         <div>
//                             <h3 className="qualification__title">Senior Developer</h3>
//                             <span className="qualification__subtitle">Freelance - Remote</span>
//                             <div className="qualification__calendar">
//                                 <HiOutlineCalendar className="qualification__calendar-icon" />
//                                 2019-Present
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section> 
//   );
// }

// export default Qualification;

import React, { useEffect, useState } from 'react';
import "./qualification.css";


import { HiOutlineBriefcase, HiOutlineCalendar } from "react-icons/hi";

const Qualification = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const position = window.scrollY + window.innerHeight;
        const element = document.getElementById('qualification-item');

        if (element && element.offsetTop < position) {
            setIsVisible(true);
            window.removeEventListener('scroll', handleScroll); // Remove event listener after visibility
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
        };
    }, []);

    return (
        <section className="qualification section" id = "qualification">
            <h2 className="section__title">
                Experience 
            </h2>
            <span className="section__subtitle">My Professional Journey</span>
            {/* Icon below "Qualification" and "My Journey" */}
            <div className="qualification__icon-container">
                <HiOutlineBriefcase style={{ fontSize: '2.75rem' }} className="qualification__icon-large" />
            </div>
            
            <div className="qualification__container container">
                
                <div className="qualification__content qualification__content-active">
                    <div className="qualification__data">
                        <div id="qualification-item" className={`animated ${isVisible ? 'visible' : ''}`}>
                            <h3 className="qualification__title_right">Cloud Zen Technologies Pvt Ltd</h3>
                            <span className="qualification__subtitle_right">Deep Learning Research Intern</span>
                            <div className="qualification__calendar_right">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                Jan 2023-May 2023
                            </div>
                        </div>
                        <div style={{ marginTop: '0.5rem' }}>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div id="qualification-item" className={`animated_right ${isVisible ? 'visible_right' : ''}`}>
                            <h3 className="qualification__title">Co-Senator</h3>
                            <span className="qualification__subtitle">GPSG-CUSG (UC Boulder Legislative Council)</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                2024-present
                            </div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div id="qualification-item" className={`animated ${isVisible ? 'visible' : ''}`}>
                            <h3 className="qualification__title_right">Graduate Senator</h3>
                            <span className="qualification__subtitle_right">GPSG-CUSG (UC Boulder Legislative Council)</span>
                            <div className="qualification__calendar_right">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                2024-present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div id="qualification-item" className={`animated_right ${isVisible ? 'visible_right' : ''}`}>
                            <h3 className="qualification__title">Technical Events Coordinator</h3>
                            <span className="qualification__subtitle">MIT CS Tech Symposium</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                2022-2023
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    );
};

export default Qualification;

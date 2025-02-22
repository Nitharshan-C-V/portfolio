import React, { useEffect } from 'react';
import "./qualification.css";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { HiOutlineBriefcase, HiOutlineCalendar } from "react-icons/hi";
import { FaDatabase, FaRobot, FaUniversity, FaLaptopCode } from "react-icons/fa";

const Qualification = () => {
    useEffect(() => {
        const handleScroll = () => {
            const cards = document.querySelectorAll('.qualification__card');
            cards.forEach(card => {
                const cardTop = card.getBoundingClientRect().top;
                const triggerPosition = window.innerHeight * 0.8;
                if (cardTop < triggerPosition) {
                    card.classList.add('visible');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        setTimeout(handleScroll, 100);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="qualification section" id="qualification">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0 }}
            >
                <h2 className="section__title">Experience</h2>
                <span className="section__subtitle">My Professional Journey</span>

                <div className="qualification__icon-container">
                    <HiOutlineBriefcase style={{ fontSize: '2.75rem' }} className="qualification__icon-large" />
                </div>

                <div className="qualification__container">
                    <VerticalTimeline>
                        {/* Data Science Volunteer */}
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: ' #f3f3f3', color: '#000' ,borderRadius: "15px"}}
                            contentArrowStyle={{ borderRight: '7px solid #f3f3f3' }}
                            date="Aug 2024 – Dec 2024"
                            icon={<FaDatabase className="timeline-icon" />}
                            iconStyle={{ background:"#fff"}}
                        >
                            <h3 className="qualification__title">Data Science Volunteer</h3>
                            <h4 className="qualification__subtitle">Colorado University Conference Services</h4>
                            <ul className="qualification__details">
                                <li>Analyzed 50,000+ event records, integrating weather and billing data to enhance scheduling efficiency by 30%.</li>
                                <li>Preprocessed data by handling missing values, outliers, and feature scaling, reducing false negatives by 25%.</li>
                                <li>Optimized ML models achieving 95% accuracy, 93% precision, and 0.94 AUC-ROC.</li>
                                <li>Developed a Streamlit-based MVP for real-time event predictions, saving $10,000 in operational costs.</li>
                            </ul>
                        </VerticalTimelineElement>

                        {/* AI/Data Science Intern */}
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: ' #f3f3f3', color: '#000' ,borderRadius: "15px"}}
                            contentArrowStyle={{ borderRight: '7px solid #f3f3f3' }}
                            date="May 2024 – Aug 2024"
                            icon={<FaRobot className="timeline-icon" />}
                            iconStyle={{ background:"#fff"}}
                        >
                            <h3 className="qualification__title">AI/Data Science Intern</h3>
                            <h4 className="qualification__subtitle">Cloud Zen Technologies Pvt Ltd</h4>
                            <ul className="qualification__details">
                                <li>Built a RAG chatbot using LangChain, achieving 86% accuracy in legal document Q&A.</li>
                                <li>Optimized PostgreSQL pipelines and integrated Pinecone vector database, reducing retrieval latency by 35%.</li>
                                <li>Processed legal data with DSPy and Unstructured.io, improving data extraction efficiency by 30%.</li>
                            </ul>
                        </VerticalTimelineElement>

                        {/* Graduate Senator */}
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: ' #f3f3f3', color: '#000' ,borderRadius: "15px"}}
                            contentArrowStyle={{ borderRight: '7px solid #f3f3f3' }}
                            date="May 2024 – Present"
                            icon={<FaUniversity className="timeline-icon" />}
                            iconStyle={{ background:"#fff"}}
                        >
                            <h3 className="qualification__title">Graduate Senator</h3>
                            <h4 className="qualification__subtitle">GPSG – CUSG (CU Boulder Legislative Council)</h4>
                            <ul className="qualification__details">
                                <li>Representing 10,000+ graduate students, ensuring their voices shape university policies.</li>
                                <li>Facilitating governance and policy initiatives, bridging communication between graduate and undergraduate governments.</li>
                                <li>Drafted and passed key resolutions, including securing increased funding for the Division of Student Affairs.</li>
                                <li>Collaborating with multiple CU Boulder subdivisions to improve campus resources.</li>
                                <li>Active member of the Finance Committee, overseeing multi-million dollar budgets.</li>
                            </ul>
                        </VerticalTimelineElement>

                        {/* Technical Events Coordinator */}
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: ' #f3f3f3', color: '#000' ,borderRadius: "15px"}}
                            contentArrowStyle={{ borderRight: '7px solid #f3f3f3' }}
                            date="2022 – 2023"
                            icon={<FaLaptopCode className="timeline-icon" />}
                            iconStyle={{ background:"#fff"}}
                        >
                            <h3 className="qualification__title">Technical Events Coordinator</h3>
                            <h4 className="qualification__subtitle">MIT CS Tech Symposium</h4>
                            <ul className="qualification__details">
                                <li>Organized 5+ technical events, including hackathons with 200+ participants.</li>
                                <li>Coordinated with faculty and industry professionals to enhance event impact.</li>
                            </ul>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </motion.div>
        </section>
    );
};

export default Qualification;


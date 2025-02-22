import React from 'react';
import "./skills.css";
import Datascience from './Datascience';
import MachineLearningTools from './Backend';
import CloudTools from './Cloud';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h1 className="section__title">Skills</h1>
        <span className="section__subtitle">Technical Lvl</span>
        <div className="skills__container container grid">
            <Datascience />
            <MachineLearningTools /> 
            <CloudTools />
        </div>
    </section>
  );
}

export default Skills;
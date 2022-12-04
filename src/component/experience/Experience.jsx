import React from 'react';
import './experience.style.css';
import { ExperienceLine } from './ExperienceLine';
import { experiences } from '../../data/experienceList';

export const Experience = () => {
  return (
    <div className="sectionExperience">
      <div className='row'>
        <div className='col-md-12 col-12 mb-5'>
          <h3 className="mt-0">Experience</h3>
        </div>
      </div>
      <div className='row'>
        { experiences.map((experience, key)=>
          <ExperienceLine
            key={key} 
            from={experience.from}
            to={experience.to}
            job={experience.job}
            title={experience.title}
            place={experience.place}
            tasks={experience.tasks} 
          />
        )}
      </div>
    </div>
  )
}

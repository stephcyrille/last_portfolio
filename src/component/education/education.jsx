import React from 'react';
import styles from './education.module.css';
import { ExperienceLine } from '../experience/ExperienceLine';
import { formations } from '../../data/formationList';

export const Education = () => {
  return (
    <div className={ styles.sectionEducation }>
      <div className='row'>
        <div className='col-md-12 col-12 mb-5'>
          <h3 className="mt-0">Formation</h3>
        </div>
      </div>
      <div className='row'>
        { formations.map((formation, key)=>
          <ExperienceLine
            key={key} 
            from={formation.from}
            to={formation.to}
            job={formation.job}
            title={formation.title}
            place={formation.place}
            tasks={formation.tasks} 
          />
        )}
      </div>
      <span id='certifications' />
    </div>
  )
}

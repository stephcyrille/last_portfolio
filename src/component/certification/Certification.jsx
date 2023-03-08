import React from 'react';
import styles from './certifications.module.css';
import agileStrategicPic from '../../assets/images/certificates/agile_strategic.png'
import agileFoundationPic from '../../assets/images/certificates/agile_foundation.png'
// import { ExperienceLine } from '../experience/ExperienceLine';
// import { formations } from '../../data/formationList';

export const Certification = () => {
  return (
    <div className={ styles.sectionCertification }>
      <div className='row'>
        <div className='col-md-12 col-12 mb-5'>
          <h3 className="mt-0">Certifications</h3>
        </div>
      </div>
      <div className='row'>
        <div className="col-md-6">
          <a className={styles.certificationBlock} href="https://www.linkedin.com/learning/certificates/db3ddfddc6581d4a46011edfb4e01aa6475317db21f882eb055fc9e29930749d?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BqAkx3vZERCSuLR315INQcw%3D%3D">
            <div className="text-center">
              <p>
                <img src={agileStrategicPic} alt="Agile strategic pic" width={150} className='d-block mr-auto mx-auto' />
                <span className='d-block text-capitalize text-center my-2'>L'Agilité stratégique</span>  
              </p>
            </div>
          </a>
        </div>
        <div className="col-md-6">
          <a className={styles.certificationBlock} href="https://www.linkedin.com/learning/certificates/51c00a05ca6f30a57e4cda38b3de205053e6d4e3e78de15912781cbd94253d41?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BqAkx3vZERCSuLR315INQcw%3D%3D">
            <div className="text-center">
              <p>
                <img src={agileFoundationPic} alt="Agile foundation pic" width={130} className='d-block mr-auto mx-auto' />
                <span className='d-block text-capitalize text-center my-2'>Les fondements de la gestion Agile</span>  
              </p>
            </div>
          </a>
        </div>
      </div>
      <span id='certifications' />
    </div>
  )
}

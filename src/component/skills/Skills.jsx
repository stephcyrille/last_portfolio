import React from 'react';
// Import react-circular-progressbar module and styles
import "react-circular-progressbar/dist/styles.css";
import { CircularProgress } from '../gauge/CircularProgress';
import { LanguageLine } from '../LanguageLine/LanguageLine';
import styles from './skills.module.css';
// import aws from '../../assets/images/languages/aws.png';
// import python from '../../assets/images/languages/python.png';
// import django from '../../assets/images/languages/django.png';
// import odoo from '../../assets/images/languages/odoo.png';
// import nodejs from '../../assets/images/languages/nodejs.png';
// import nextjs from '../../assets/images/languages/nextjs.png';
// import reactjs from '../../assets/images/languages/react.png';
// import oracle from '../../assets/images/languages/oracle.png';
// import office from '../../assets/images/languages/office.png';
// import powerbi from '../../assets/images/languages/power_bi.png';


export const Skills = () => {

  return (
    <div className={ styles.sectionSkills }>
      <div className='row'>
        <div className='col-md-12 col-12 mb-5'>
          <h3 className="mt-0">Langage de Programmation</h3>
          <div className='row'>
            <LanguageLine language='HTML / CSS' />
            <LanguageLine language='Javascript' />
            <LanguageLine language='Python' />
            <LanguageLine language='DART' />
            <LanguageLine language='SQL' />
            <LanguageLine language='VBA' />
          </div>
        </div>
        <div className='col-md-12 mb-2'>
          <h3 className="mt-0">Compétences personnelles</h3>
          <div className='row'>
            <div className='col-4 col-lg-3'>
               <CircularProgress text={"Discipliné"} percent={90} />
            </div>
            <div className='col-4 col-lg-3'>
               <CircularProgress text={"Multitâche"} percent={80} />
            </div>
            <div className='col-4 col-lg-3'>
               <CircularProgress text={"Ponctuel"} percent={80} />
            </div>
            <div className='col-4 col-lg-3'>
               <CircularProgress text={"Sens de l'initiative"} percent={90} />
            </div>
            <div className='col-4 col-lg-3'>
               <CircularProgress text={"Sens Analytique"} percent={85} />
            </div>
          </div>
        </div>
        <span id="experience" />
      </div>
    </div>
  )
}

{/* <div className="sectionSkills">
  <h3 className="mt-0 text-center">Mes compétences</h3>
  <div className='row'>
    <div className='col-md-3 col-4 mb-3'><img src={python} alt={''} className='img-fluid' /></div>
    <div className='col-md-3 col-4 mb-3'><img src={django} alt={''} className='img-fluid' /></div>
    <div className='col-md-3 col-4 mb-3'><img src={odoo} alt={''} className='img-fluid' /></div>
    <div className='col-md-3 col-4 mb-3'><img src={nodejs} alt={''} className='img-fluid' /></div>
    <div className='col-md-3 col-4 mb-3'><img src={nextjs} alt={''} className='img-fluid' /></div>
    <div className='col-md-3 col-4 mb-3'><img src={reactjs} alt={''} className='img-fluid' /></div>
    <div className='col-md-3 col-4 mb-3'><img src={oracle} alt={''} className='img-fluid' /></div>
    <div className='col-md-3 col-4 mb-3'><img src={office} alt={''} className='img-fluid' /></div>
    <div className='col-md-3 col-4 mb-3'><img src={powerbi} alt={''} className='img-fluid' /></div>
    <div className='col-md-3 col-4 mb-3'><img src={aws} alt={''} className='img-fluid' /></div>
  </div>
</div> */}

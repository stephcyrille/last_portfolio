import React, { useState } from 'react'
import picture from '../../assets/images/profile.jpg'
import { faGithub, faLinkedin, faTwitter, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft, faQuoteRight, faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './home.style.css';
import { AboutMe } from '../../component/AboutMe';

export const Home = () => {
  const [count, setCounter] = useState(125);
  let githubUrl = 'https://github.com/stephcyrille';
  let githubTitle = 'Me trouver sur Github';

  return (
    // <div className="py-4 px-3">
    <div>
      <div className='wrapper'>
        <div className="block-wrapper-image">
          <div className='background-circle-effect'>
            <div className='block-bckg-image' />
          </div>
        </div>
        
        <AboutMe />


        <div className="section-about-me">
          <Row className='text-white pt-4'>
            <h1 className='mb-4'>A propos de moi</h1>
            <p>
              <FontAwesomeIcon icon={faQuoteLeft} /> &nbsp;
              Motivé, ayant une bonne connaissance des méthodes de gestions de projets agile et un background en devéloppement web très fournis. Mon expérience bâti sur près de 5 ans m’a permis de découvrir l’univers des progiciels de gestions intégrés et de développer une expérience avisée dans ce domaine. Mes compétences variées seraient un très grand atout à toutes entreprises qui voudrait améliorer ses résultats et moderniser ses processus. &nbsp;
              <FontAwesomeIcon icon={faQuoteRight} /> 
            </p>

            <h4>Mebenga Atanga Stéphane C.</h4>
              <span>Software Engineer</span>
              <p className='logoSocial d-line'>
                <a href={githubUrl} title={githubTitle} target='new'><FontAwesomeIcon icon={faGithub} /></a>&nbsp;
                <FontAwesomeIcon icon={faLinkedin} /> &nbsp;
                <FontAwesomeIcon icon={faTwitter} /> &nbsp;
                <FontAwesomeIcon icon={faGoogle} />
              </p>

            <h3 className="mt-4">Rate my portfolio there there</h3>

            <Container className='py-3'>
              <Row className="justify-content-md-center mb-4">
                <Col xs lg="2">
                  <button type="button" className="btn btn-info rounded-circle">
                    <FontAwesomeIcon 
                      icon={faChevronUp}
                      onClick={()=> {
                        let val = count + 1
                        setCounter(val)
                      }} 
                    />
                  </button>
                </Col>
                <Col md="auto">{count}</Col>
                <Col xs lg="2">
                  <button disabled type="button" class="btn btn-info rounded-circle">
                    <FontAwesomeIcon 
                      icon={faChevronDown}
                      onClick={()=> {
                        let val = count - 1
                        setCounter(val)
                      }} 
                    />
                  </button>
                </Col>
              </Row>
            </Container>
          </Row>
        </div>




      </div>
    </div>
  )
}

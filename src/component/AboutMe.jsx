import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { faGithub, faLinkedin, faTwitter, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './about-me.style.css';

export const AboutMe = () => {
  let github = { url: 'https://github.com/stephcyrille', title: 'Me trouver sur Github'};
  let linkedin = { url: 'https://linkedin.com/in/stephcyrille', title: 'Me trouver sur linkedin'};
  let twitter = { url: 'https://twitter.com/steph_cyrille', title: 'Laissez moi un tweet'};
  let mail = { url: 'mailto:stephcyril.sc@gmail.com', title: 'Envoyer moi un email'};

  return (
    <div className="sectionMboutMe" id="aboutMe">
      <h1 className='titleName'>Mebenga Atanga Stéphane C.</h1>
      <TypeAnimation
        sequence={['Développeur Fullstack', 1000, 'Développeur de BD', 1000, 'Analyste de données', 1000]}
                      //  Replacing previous Text
        wrapper="h4"
        repeat={Infinity}
      />
  
      <p>
        Motivé, ayant une bonne connaissance des méthodes de gestions de projets et un background en devéloppement web conséquent, mon expérience bâti sur près de 5 ans dans les métier du développement m’a permis de découvrir l’univers des progiciels de gestions intégrés et de développer mes connaissances dans ce domaine.
      </p>


      <p className='logoSocial'>
        <a href={github.url} title={github.title} target='new'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href={linkedin.url} title={linkedin.title} target='new'>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href={twitter.url} title={twitter.title} target='new'>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href={mail.url} title={mail.title}>
          <FontAwesomeIcon icon={faGoogle} />
        </a>
      </p>
    </div>
  )
}

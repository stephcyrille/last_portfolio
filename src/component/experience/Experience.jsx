import React from 'react';
import './experience.style.css';

export const Experience = () => {
  return (
    <div className="sectionExperience">
      <div className='row'>
        <div className='col-md-12 col-12 mb-5'>
          <h3 className="mt-0">Experience</h3>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-6 col-12 experienceLine'>
          <span className='date'>09/22 - Aujourd'hui</span>
          <h4>Intégrateur ERP Odoo</h4>
          <h5><span className='society'>Consultant Projet ERP Coca-Cola GRACEDOM Invest</span>, CMR</h5>
          <ul>
            <li>Intégration module de fabrication</li>
            <li>Intégration du module de Gestion de la maintenance</li>
            <li>
              Mise en place de l'environnement de production:
              <ol>
                <li>Installation des services</li>
                <li>Mise en place des Parfeux</li>
                <li>Enregistrement de certificat SSL</li>
                <li>Déploiement des modules</li>
              </ol>
            </li>
            <li>Gestion du dépot de code source: validation PR, gestion des versions des droit d'accès</li>
          </ul>
        </div>
        
        <div className='col-lg-6 col-12 experienceLine'>
          <span className='date'>03/22 - 08/22</span>
          <h4>Analyste de données</h4>
          <h5><span className='society'>ENEO</span>, CMR</h5>
          <ul>
            <li>Extractions des données d’Oracle DB et Analyse du rendement mensuel</li>
            <li>Collecte et traitement des données brutes (ventes, encaissements, etc.) </li>
            <li>Historisation des données en base de données</li>
            <li>Production et publication de rapport automatisés avec Power BI</li>
            <li>Conception et réalisation du Data Mart des ventes</li>
          </ul>
        </div>

        <div className='col-lg-6 col-12 experienceLine'>
          <span className='date'>10/21 - 02/22</span>
          <h4>Intégrateur ERP Odoo</h4>
          <h5><span className='society'>Consultant Projet ERP RH & PAIE Guichet Unique</span>, CMR</h5>
          <ul>
            <li>Analyse et recceuil des besoins utilisateurs</li>
            <li>Mise en place d'un tableau de bord opérationnel</li>
            <li>Intégration du module de gestion RH</li>
            <li>Intégration outil d'analyse croisé et diagramme</li>
            <li>Formation utilisateurs</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

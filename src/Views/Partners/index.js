import React, { Component } from 'react';
import './Partners.css';

import NavBar from '../../Modules/NavBar';
import HeroHeader from '../../Modules/HeroHeader';
import AppStore from '../../Modules/AppStore';
import TalkToUs from '../../Modules/TalkToUs';
import Footer from '../../Modules/Footer';

class Partners extends Component {
  render() {
    return (
      <div className="partners">
        <div className="NavHeader">
          <NavBar />
          <HeroHeader />
        </div>
        <p>
          La digitalisation des métiers et des outils demande aux marques de
          charger et maintenir à jour leurs données produits dans une multitude
          de systèmes. L’app store de la plateforme Alkemics apporte plus
          d’agilité aux marques en regroupant des applications et services
          nativement intégrés avec Alkemics qui permettent d’automatiser le
          chargement et la récupération des données produits. Innover avec le
          digital devient plus simple, plus rapide.
        </p>
        <AppStore />
        <TalkToUs />
        <Footer />
      </div>
    );
  }
}

export default Partners;

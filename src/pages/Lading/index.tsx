import React from 'react';
import { FiLinkedin, FiLogIn, FiInbox } from 'react-icons/fi';
import './styles.css';

import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

export default function Landing() {
  return (
    <div id="page-landing">
      <div className="container" id="page-landing-content">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>
            Sua Plataforma de estudos online
            <br />
            Para aprender programação
            <br />
            desde o primeiro código 🥇
          </h2>
        </div>

        <img
          src={landingImg}
          alt="Plataforma de Estudos"
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/content" className="study">
            <FiLogIn size={30} />
            Entrar
          </Link>
          <a
            href="mailto:robertojuniordev@gmail.com?subject=Informações%20sobre%20o%20curso%20FirstCode"
            className="give-classes"
          >
            <FiInbox size={30} />
            Informações
          </a>
        </div>

        <span className="total-connections">
          <a href="https://www.linkedin.com/in/robertojrcdc/">
            A Roberto Junior's plataform.
            <FiLinkedin />
          </a>
        </span>
      </div>
    </div>
  );
}

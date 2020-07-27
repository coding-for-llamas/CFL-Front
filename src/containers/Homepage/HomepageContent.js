import React from 'react';
import background from '../../../static/img/background.jpg';

const HomeContent = () => (
  <div className="container">
    <main className="home-main">
      <img src={background} alt="Laptop" className="bg" />
      <div className="homeHeader">
        <h1 className="lg-heading">
          Rhayven
          {' '}
          <span className="text-secondary">Ayers</span>
        </h1>
        <h2 className="sm-heading">
          Accessible Web Developer, Programmer &amp; Designer
        </h2>
        <div className="icons">
          <a href="https://twitter.com/codingforllamas" aria-label="Twitter Page">
            <i className="fab fa-twitter fa-2x" />
          </a>
          <a href="https://www.facebook.com/codingforllamas" aria-label="Facebook Page">
            <i className="fab fa-facebook fa-2x" />
          </a>
          <a href="https://www.linkedin.com/in/rhayvenayers" aria-label="LinkedIn Page">
            <i className="fab fa-linkedin fa-2x" />
          </a>
          <a href="https://github.com/Unesdala" aria-label="Github Page">
            <i className="fab fa-github fa-2x" />
          </a>
        </div>
      </div>
    </main>
  </div>
);

export default HomeContent;

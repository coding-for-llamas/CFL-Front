/* eslint-disable max-len */
import React from 'react';

const CafeLatteContent = (): JSX.Element => (
  <div className="container">
    <main className="contact-main">
      <h1 className="lg-heading">
        Cafe Latte
        {' '}
        <span className="text-secondary">Case Study</span>
      </h1>

      <div className="cafeLatte-info">
        <div className="cafeLatte cafeLatte-1">
          <div className="study-name">
            <h1>Cafe Latte App Design</h1>
            <hr />
            <h2>
              Rhayven Ayers
            </h2>
          </div>
          <div className="project-overview">
            <h1>Project Overview</h1>
            <div className="project--product">
              <i className="fas fa-laptop-house" />
              <h2>The Product:</h2>
              <p>
                Cafe Latte is a local cafe offering a variety of coffee and food
                products at an affordable price. Cafe Latte aims to give working
                people an at-home meal experience at a fast-food pace - allowing
                for people who have time to sit down and enjoy themselves while
                people on the move can grab a bite and get about their day. Cafe
                Latte targets busy commuters who need a pick-me-up throughout
                their day.
              </p>
              <i className="far fa-clock" />
              <h2>Project Duration:</h2>
              <p>
                July 2021 - October 2021
              </p>
              <img src="" alt="Two phone screens showing examples of the Cafe Latte app." />
            </div>
            <div className="project--problem">
              <i className="fas fa-exclamation-circle" />
              <h2>The Problem</h2>
              <p>
                Busy workers and commuters lack the time to
                prepare a healthy meal that corresponds with
                their schedule
              </p>
            </div>
            <div className="project--goal">
              <i className="#" />
              <h2>The Goal</h2>
              <p>
                Busy workers and commuters lack the time to
                prepare a healthy meal that corresponds with
                their schedule
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default CafeLatteContent;

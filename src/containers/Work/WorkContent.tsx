import React from 'react';

const project1 = 'https://www.dl.dropboxusercontent.com/s/c9mxoixh5sqnict/project1.png?dl=0';

const WorkContent = (): JSX.Element => (
  <div className="container">
    <main className="work-main">
      <h1 className="lg-heading">
        My
        {' '}
        <span className="text-secondary">Work</span>
      </h1>

      <h2 className="sm-heading">
        Some of the projects I&apos;ve worked on.
      </h2>

      <div className="projects">
        <div className="item">
          <a href="/daycare">
            <img src={project1} alt="Screenshot of a daycare website" />
          </a>
          <a href="/daycare" className="btn-light" aria-label="Link to Caring Child Daycare">
            <i className="fas fa-eye" />
            &nbsp;
            Caring Child Daycare
          </a>
          <a
            href="https://github.com/coding-for-llamas/caring-child-daycare"
            className="btn-dark"
            aria-label="Link to Caring Child Daycare Github Page"
          >
            <i className="fab fa-github" />
            &nbsp;
            Github
          </a>
        </div>
      </div>
    </main>
  </div>
);

export default WorkContent;

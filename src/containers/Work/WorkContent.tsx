import React from 'react';

const project1 = 'https://www.dl.dropboxusercontent.com/s/c9mxoixh5sqnict/project1.png?dl=0';
const project2 = 'https://dl.dropboxusercontent.com/s/d652fnqcve9u3bb/Screenshot%202021-09-30%20at%2016-34-10%20cfl-front%20-%20Dropbox.png?dl=0';
const project2PDF = 'https://dl.dropboxusercontent.com/s/o7vvnotuy1y6lh3/Cafe%20Latte%20Case%20Study.pdf?dl=0';

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
        <div className="item">
          <a href={project2PDF} target="_blank" rel="noreferrer">
            <img src={project2} alt="Screenshot of the cafe latte PDF preview" />
          </a>
          <a href={project2PDF} className="btn-light" aria-label="Link to the PDF of the Cafe Latte case study">
            <i className="fas fa-eye" />
            &nbsp;
            Cafe Latte Case Study
          </a>
        </div>
      </div>
    </main>
  </div>
);

export default WorkContent;

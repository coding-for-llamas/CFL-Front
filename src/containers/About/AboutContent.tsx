import React from 'react';

const portrait = 'https://www.dl.dropboxusercontent.com/s/n020xh0qaqqpwzc/portrait.jpg?dl=0';

const AboutContent = (): JSX.Element => (
  <div className="container">
    <main className="about-main">
      <h1 className="lg-heading">
        About
        {' '}
        <span className="text-secondary">Me</span>
      </h1>

      <h2 className="sm-heading">
        A bit about the developer.
      </h2>

      <div className="about-info">
        <img src={portrait} alt="Web Developer Portrait" className="bio-image" />
        <div className="bio" role="main" aria-labelledby="About Main">
          <h3>
            Hello, I&apos;m
            <span className="text-secondary"> Rhayven</span>
          </h3>
          <br />
          <p>
            I am a full stack web developer with a passion for front-end design work.
          </p>
          <p>
            I have had an interest in tech since I was a kid. I wanted to be able to customize my user lookup on neopets,
            so I started dabbling with simple HTML and CSS with the help of their personal guides.
          </p>
          <p>
            Since those early days,
            I&apos;ve gone to Virgina Western and gotten my Career Service Certificate, and taken a vested interest in learning as much as I can.
          </p>
          <p>
            My main focus is on accessibility in web development - it is my belief that accessible web
            design can both look and run just as well as traditionaly programmed websites when accessibility is considered from the beginning.
          </p>
          <p>
            The internet should be accessible to all and with a little forethought, that is achievable!
          </p>
        </div>

        <div className="about about-1">
          <h3 role="main" aria-labelledby="About 1"><u>Proficient In</u></h3>
          <p>
            HTML5
            <br />
            CSS3
            <br />
            JavaScript
            <br />
            WordPress
            <br />
            Bootstrap
            <br />
            <abbr title="Photoshop Data file (extension)">PSD</abbr>
            {' '}
            to HTML/CSS
            <br />
            <abbr title="JavaScript XML">JSX</abbr>
          </p>
        </div>
        <div className="about about-2">
          <h3 role="main" aria-labelledby="About 2"><u>Comfortable In</u></h3>
          <p>
            Accessible Web Design
            <br />
            Mobile Friendly Web Design
            <br />
            Node.JS
            <br />
            React
            <br />
            TypeScript
            <br />
            MongoDB
            <br />
            Express
          </p>
        </div>
        <div className="about about-3">
          <h3 role="main" aria-labelledby="About 3"><u>Learning</u></h3>
          <p>
            UI/UX Design
            <br />
            <a
              href="https://www.coursera.org/professional-certificates/google-ux-design"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google UX Design Certificate
            </a>
          </p>
        </div>
      </div>
    </main>
  </div>
);

export default AboutContent;

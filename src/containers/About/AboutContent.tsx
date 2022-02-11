const AboutContent = (): JSX.Element => (
  <>
    <div className="about-header">
      <h1 className="lg-heading">
        About
        {' '}
        <span className="text-secondary">Me</span>
      </h1>
      <h2 className="sm-heading">
        A bit about the developer.
      </h2>
    </div>
    <div className="about-info">
      <div className="about-intro">
        <img src="https://www.dl.dropboxusercontent.com/s/n020xh0qaqqpwzc/portrait.jpg?dl=0"
        className="about-picture" alt="A selfie of the developer in her wheelchair" />
        <div className="about-text">
          <h3>
            Hello, I'm
            {' '}
            <span className="text-secondary">Rhayven</span>
          </h3>
          <br />
          <p>I am a full stack web developer with a passion for front-end design work.</p>

          <p>
            I have had an interest in tech since I was a kid. I wanted to be able to customize my user lookup on neopets, 
            so I started dabbling with simple HTML and CSS with the help of their personal guides.
          </p>

          <p>
            Since those early days, I've gone to Virgina Western and gotten my Career Service Certificate, 
            and taken a vested interest in learning as much as I can.
          </p>

          <p>
            My main focus is on accessibility in web development - it is my belief that accessible web design can 
            both look and run just as well as traditionaly programmed websites when accessibility is considered from the beginning.
          </p>

          <p>The internet should be accessible to all and with a little forethought, that is achievable!</p>
        </div>
      </div>
      <div className="about-proficiency">
        <div className="about-proficiency--box-1">
          <h3 className="underline">Proficient In</h3>
            <p>HTML5</p>
            <p>CSS3</p>
            <p>JavaScript</p>
            <p>WordPress</p>
            <p>Bootstrap</p>
            <p><abbr title="Photoshop Data file">PSD</abbr> to HTML/CSS</p>
            <p><abbr title="JavaScript XML">JSX</abbr></p>
        </div>
        <div className="about-proficiency--box-2">
          <h3 className="underline">Comfortable In</h3>
            <p>Accessible Web Design</p>
            <p>Mobile Friendly Web Design</p>
            <p>Node.JS</p>
            <p>React</p>
            <p>TypeScript</p>
            <p>MongoDB</p>
            <p>Express</p>
        </div>
        <div className="about-proficiency--box-3">
          <h3 className="underline">Interested In</h3>
          <p>Proccessing</p>
          <p>Data Analysis with Python</p>
          <p>Data Visualization</p>
        </div>
      </div>
    </div>
  </>
);

export default AboutContent;
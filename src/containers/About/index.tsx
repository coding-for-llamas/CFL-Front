import AboutContent from './AboutContent';

export const About = (): JSX.Element => {
  document.title = 'About | Coding For Llamas';  
  return (
      <div className="Site-content">
        <main className="about-main">
          <AboutContent />
        </main>
      </div>
  );
};

export default About;

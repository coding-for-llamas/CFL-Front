const ContactContent = (): JSX.Element => (
  <>
    <div className="Contact-header">
      <h1 className="lg-heading">
        Contact
        {' '}
        <span className="text-secondary">Me</span>
      </h1>
      <h2 className="sm-heading">
        Want to talk? Here's where I can be reached!
      </h2>
    </div>
    <div className="contact-info">
      <div className="contact-info--box">
        <p>
          <a href="mailto:rhayven@codingforllamas.com" target="_blank" rel="noopener noreferrer">Email</a>
          <br />
          <a href="https://www.facebook.com/codingforllamas/" target="_blank" rel="noopener noreferrer">Facebook</a>
          <br />
          <a href="https://twitter.com/codingforllamas" target="_blank" rel="noopener noreferrer">Twitter
          </a>
          <br />
          <a href="https://github.com/unesdala" target="_blank" rel="noopener noreferrer">Github</a>
        </p>
      </div>
    </div>
  </>
);

export default ContactContent;
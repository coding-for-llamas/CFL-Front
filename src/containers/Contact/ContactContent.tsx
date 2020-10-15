import React from 'react';

const ContactContent = (): JSX.Element => (
  <div className="container">
    <main className="contact">
      <h1 className="lg-heading">
        Contact
        {' '}
        <span className="text-secondary">Me</span>
      </h1>

      <h2 className="sm-heading">
        Want to talk? Here&apos;s where I can be reached!
      </h2>

      <div className="contact-info">
        <div className="contact contact-1">
          <p>
            <a href="mailto:rhayven@codingforllamas.com">Email</a>
            <br />
            <a href="https://www.facebook.com/codingforllamas/">Facebook</a>
            <br />
            <a href="https://twitter.com/codingforllamas">Twitter</a>
            <br />
            <a href="https://github.com/unesdala">Github</a>
          </p>
        </div>
      </div>
    </main>
  </div>
);

export default ContactContent;

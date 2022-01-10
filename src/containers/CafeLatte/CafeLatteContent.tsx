/* eslint-disable max-len */
import React from 'react';

const CafeLatteContent = (): JSX.Element => (
  <div className="container">
    <main className="cafeLatte-main">
      <h1 className="lg-heading">
        Cafe Latte
        {' '}
        <span className="text-secondary">Case Study</span>
      </h1>

      <div className="cafeLatte-info casestudy-info">
        <div className="study-name">
          <h1>Cafe Latte App Design</h1>
          <h2 className="no-decoration">
            Rhayven Ayers
          </h2>
          <hr />
        </div>
        <div className="project--overview">
          <h1>Project Overview</h1>
          <div className="project--product">
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
            <h2>Project Duration:</h2>
            <p>
              July 2021 - October 2021
            </p>
          </div>
          <hr />
          <div className="project--problem">
            <h2>The Problem:</h2>
            <p>
              Busy workers and commuters lack the time to
              prepare a healthy meal that corresponds with
              their schedule
            </p>
          </div>
          <div className="project--goal">
            <h2>The Goal:</h2>
            <p>
              Busy workers and commuters lack the time to
              prepare a healthy meal that corresponds with
              their schedule
            </p>
          </div>
          <div className="project--my-role">
            <h2>My role:</h2>
            <p>
              UX Designer and Programmer designing an app for Cafe Latte from conception to finish.
            </p>
          </div>
          <div className="project--responsibilities">
            <h2>Responsibilities:</h2>
            <p>
              Conducting interviews, Paper and Digital wireframing, Low and High Fidelity protoyping, conducting usability research, accessibility testing, and iterating on designs.
            </p>
          </div>
        </div>
        <hr />
        <div className="slide-card">
          <h1>Understanding The user</h1>
          <div className="slide-card--divider" />
          <div className="slide-card--list">
            <ul>
              <li>User research</li>
              <li>Personas</li>
              <li>Problem statements</li>
              <li>User journey maps</li>
            </ul>
          </div>
        </div>
        <div className="user-research">
          <div className="user-research--sumary">
            <h1>User research: Summary</h1>
            <p>
              I conducted interviews and created user maps in order to understand the users I’m designing the app for. The primary user group identified was busy adults who wanted to be able to grab fast food that was healthier on their morning commute.
            </p>
            <p>
              While this initial user group confirmed a large group of primary users, further user resarch identified a further group of people - mainly, adults that want healthy food fast for their lunch hour, as well as users wanting coffee at more affordable prices.
            </p>
          </div>
          <div className="user-research--pain-points">
            <h1>User Research: Pain Points</h1>
            <h2>Time</h2>
            <p>
              Busy adults don’t have time to spend navigating apps to find a restaraunt to grab lunch from. They want a centralized experience for a place they already know and love.
            </p>
            <h2>Accessibility</h2>
            <p>
              Too many food ordering apps are not designed with low vision people in mind.
            </p>
            <h2>UI/UX</h2>
            <p>
              Many food ordering apps aren’t intuitive with their navigation. While some have great search options, they can be frustrating to use.
            </p>
          </div>
          <div className="user-research--persona">
            <h1>Persona: Jessica</h1>
            <h2>Problem Statement:</h2>
            <p>
              Jessica is a 23 year old college student
              who needs an accessible food ordering app because she was born blind.
            </p>
            <img src="https://dl.dropboxusercontent.com/s/1ggink6u2cusnno/Persona.png?dl=0" alt="A writeup of a persona card made for a persona named Jessica Turner." />
          </div>
          <hr />
          <div className="user-research--user-journey-map">
            <h1>User Journey Map</h1>
            <p>
              Jessica’s journey map showed an overall need for an easy and efficient way to order food from her favourite local cafe.
            </p>
            {/* ToDo:
            Consider turning into an actual table to make more accessible.
            */}
            {/* <img src="#" alt="A squished user journey map made for Jessica Turner" /> */}
          </div>
        </div>
        <hr />
        <div className="slide-card">
          <h1>Starting The Design</h1>
          <div className="slide-card--divider" />
          <div className="slide-card--list">
            <ul>
              <li>Paper Wireframes</li>
              <li>Digital Wireframes</li>
              <li>Low-Fidelity Prototype</li>
              <li>Usability Studies</li>
            </ul>
          </div>
        </div>
        <div className="starting-the-design">
          <div className="starting-the-design--paper-wireframes">
            <h1>Paper Wireframes</h1>
            <p>By taking the time to draft each screen of the app on paper, I was able to ensure that different elements that would eventually make it to the digital wireframe were well suited for the users needs and would adress user pain points.</p>
            <p>
              For the home screen, I
              <span className="font--bold"> prioritized an accessible, easy to use navigation.</span>
            </p>
            <p>
              Overall elements that would later be kept were
              <span className="font--bold"> starred</span>
              .
            </p>
            {/* <img src="#" alt="The paper wireframe for Cafe Latte" /> */}
          </div>
          <div className="starting-the-design--digital-wireframes">
            <h1>Digital Wireframes</h1>
            <p>
              As the design phase continued, I ensured that user feedback was implimented in with the ongoing designs.
            </p>
            <p className="top-img-text">
              Large rotating image of foods for people who aren’t sure what they want.
            </p>
            <img src="https://dl.dropboxusercontent.com/s/j3j4jgssutmqt18/Homepage-1.png?dl=0" alt="Screenshot of the homepage of Cafe Latte" />
            <p className="bottom-img-text">
              Pictures of food to easily navigate to different menu items.
            </p>
          </div>
          <div className="starting-the-design--digital-wireframes">
            <h1>Digital Wireframes</h1>
            <p>
              Fluid navigation was added to both assist users with low vision using assistive technology as well as speed up and make user flow more fluid.
            </p>
            <p className="top-img-text">
              Easy to access navigation that’s screen reader accessible.
            </p>
            {/* <img src="#" alt="Screenshot of the mobile menu for Cafe Latte" /> */}
            <p className="bottom-img-text">
              Cuts out fluff from the rest of the screen to reduce visual noise.
            </p>
          </div>
          <div className="starting-the-design--low-fidelity-prototype">
            <h1>Low-Fidelity Prototype</h1>
            <p>I used the complete set of digital wireframes to scaffold out a low-fidelity prototype. In all, I wanted users to be able to access a broad specrum of the app, to identify any pain points with the ordering process and overall navigation.</p>
            <p>
              View the Cafe Latte
              <a href="https://www.figma.com/proto/ybQ00gC7cgbE994ygyFcHA/Cafe-Latte?node-id=1%3A3&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A3"> Low-Fidelity App</a>
            </p>
            {/* <img src="#" alt="Screenshot of the low fidelity prototype showing the overall flow of the app" /> */}
          </div>
          <div className="starting-the-design--usability-study">
            <h1>Usability Study: Findings</h1>
            <p>
              The usability study indicated users were having issues navigating. They also were having a hard time identifying food items through pictures alone. Finally, they wanted a means to “quick add” foods from their profile.
            </p>
            <div className="round-findings--1">
              <h2>Round 1 Findings</h2>
              <p>Users found navigating easy.</p>
              <p>Users knew how to get started.</p>
              <p>
                Some users found adding food to the cart difficult.
              </p>
            </div>
            <div className="round-findings--2">
              <h2>Round 2 Findings</h2>
              <p>
                Users wanted more ways to identify food options.
              </p>
              <p>
                Users wanted clearer indications of adding food to the cart.
              </p>
              <p>
                Users found navigation slightly frustrating due to spacing issues.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="slide-card">
          <h1>Refining the design</h1>
          <div className="slide-card--divider" />
          <div className="slide-card--list">
            <ul>
              <li>Mockups</li>
              <li>High-Fidelity Prototype</li>
              <li>Accessibility</li>
            </ul>
          </div>
        </div>
        <div className="refining-the-design">
          <div className="refining-the-design--mockups-1">
            <h1>Mockups</h1>
            <p>
              While early designs had the concept of adding images to use as a navigation tool (With alt text for screen readers), it was brought up that adding text underneath would be better for usability.
            </p>
            <h3 className="img-header">Before Usability Study</h3>
            <img src="https://dl.dropboxusercontent.com/s/j3j4jgssutmqt18/Homepage-1.png?dl=0" alt="A gray and white screenshot of the homepage" />
            <h3 className="img-header">After Usability Study</h3>
            <img src="https://dl.dropboxusercontent.com/s/ftf5508ovzx6pgy/Homepage-2.png?dl=0" alt="The finished version of the Cafe Latte Homepage" />
          </div>
          <div className="refining-the-design--mockups-2">
            <h1>Mockups</h1>
            <p>
              In the original wireframe/mockup, there wasn’t a lot going on with the user profile. Through user feedback, we spruced up the look of it, and added much needed quality of life features.
            </p>
            <h3 className="img-header">Before Usability Study</h3>
            <img src="https://dl.dropboxusercontent.com/s/zk7pxf0wkizy1hm/Profile-1.png?dl=0" alt="A gray and white screenshot of the user profile page." />
            <h3 className="img-header">After Usability Study</h3>
            <img src="https://dl.dropboxusercontent.com/s/54k0v1juw2cpbw0/Profile-2.png?dl=0" alt="The finished version of the profile page" />
          </div>
          <div className="refining-the-design--mockups-3">
            <h3>More Mockups</h3>
            <img src="https://dl.dropboxusercontent.com/s/j975nqgjqhkw6y5/Mockup-1.png?dl=0" alt="The finished version of the homepage" />
            <img src="https://dl.dropboxusercontent.com/s/dbihchgpamak7ce/Mockup-2.png?dl=0" alt="The finished version of an individual product page. This one includes a double cheese burger." />
            <img src="https://dl.dropboxusercontent.com/s/ph6cfbtjfojm03q/Mockup-3.png?dl=0" alt="The finished version of the order screen. It includes spots for a users billing information." />
            <img src="https://dl.dropboxusercontent.com/s/q392ged96w3obre/Mockup-4.png?dl=0" alt="The finished version of the confirmation order screen. It includes a mocked map, a time estimate, and a copy of the order." />
          </div>
          <div className="refining-the-design--high-fidelity">
            <h1>High-Fidelity Prototype</h1>
            <p>
              The final high-fidelity prototype offered better user-flow, focussing on the ordering proccess. It also added better examples for the checkout process.
            </p>
            View the Cafe Latte
            <a href="https://www.figma.com/proto/ybQ00gC7cgbE994ygyFcHA/Cafe-Latte?node-id=211%3A728&scaling=scale-down&page-id=206%3A392&starting-point-node-id=211%3A728"> Hi-Fidelity App</a>
            <img src="" alt="A screenshot of the high-fidelity prototype, showing the general user flow." />
          </div>
          <div className="refining-the-design--">
            <h1>Accessibility Considerations</h1>
            <div className="accessibility-consideration--1">
              <p>
                Added alt-text to allow visually impaired users to be able to identify images used in the app using a screen reader.
              </p>
            </div>
            <div className="accessibility-consideration--2">
              <p>Tested user flow for the app using Voice Over and TalkBack.</p>
            </div>
            <div className="accessibility-consideration--3">
              <p>Used Icons in addition to text to better visualize overall navigation for the app.</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="slide-card">
          <h1>Going Forward</h1>
          <div className="slide-card--divider" />
          <div className="slide-card--list">
            <ul>
              <li>Takeaways</li>
              <li>Next Steps</li>
            </ul>
          </div>
        </div>
        <div className="going-forward">
          <div className="going-forward--takeaways">
            <h1>Takeaways</h1>
            <div className="going-forward--takeaways__impact">
              <h2>Impact:</h2>
              <p>
                The app makes users feel like Cafe Latte really cares about their needs.
              </p>
              <p>
                To quote one user: “I’ve used other apps in the past, but they felt clunky, and unwieldy. Being blind, often times it doesn’t feel like apps have my accessibility needs in mind. Cafe Latte felt different and accessible. I’ll definitely use them for my coffee fix in the future.”
              </p>
            </div>
            <div className="going-forward--takeaways__impact">
              <h2>What I learned:</h2>
              <p>
                Listening to design feedback is important. Even when we try to eliminate bias in our designs, it can still come out, so not feeling beholden to a first iteration of a design is important. A combination of user and colleague input is important in the design process.
              </p>
            </div>
          </div>
          <div className="going-forward--lets-connect">
            <h1>Let&apos;s Connect!</h1>
            <p>
              Thank you for your time reviewing my work on the Cafe Latte app! If you’d like to
              see more or get in touch, my contact information is provided below.
            </p>
            <p>Email: <a href="mailto:codingforllamas@gmail.com">CodingForLlamas@Gmail.Com</a></p>
            <p>Website: <a href="https://codingforllamas.com">CodingForLlamas.Com</a></p>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default CafeLatteContent;

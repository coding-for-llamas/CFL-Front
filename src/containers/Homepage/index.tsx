import React from 'react';
import HomeContent from './HomepageContent';

export const Homepage = (): JSX.Element => {
  return (
      <div className="Site-content">
        <main className="home-main">
          <HomeContent />
        </main>
      </div>
  );
};

export default Homepage;

import { Redirect } from 'react-router-dom';

const FourOhFour = (): JSX.Element => (
  <div className="Site-content">
    <div className="fof">
      404 - Page not available
    </div>
    <Redirect to="/" />
  </div>
);
export default FourOhFour;

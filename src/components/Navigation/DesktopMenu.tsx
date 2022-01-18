import { NavLink } from 'react-router-dom';

export const DesktopMenu = (): JSX.Element => {
  return (
    <>
      <nav className="menu">
        <ul className="menu-nav">
          <li className="nav-item"><NavLink to="/" className="nav-link" exact activeClassName="active">Home</NavLink></li>
          <li className="nav-item"><NavLink to="/about" className="nav-link">About Me</NavLink></li>
          <li className="nav-item"><NavLink to="/work" className="nav-link">My Work</NavLink></li>
          <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact Me</NavLink></li>
          <li className="nav-item">
            <a
              href="https://dl.dropboxusercontent.com/s/y47jfwxu6lytoas/Rhayven_Ayers_Resume.pdf?dl=0"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default DesktopMenu;
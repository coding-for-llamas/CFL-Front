import React from 'react';

function getFullYear() {
  const d = new Date();
  const n = d.getFullYear();
  return n;
}
const Footer = (): JSX.Element => (
  <footer className="main-footer">
    Copyright &copy; 2018-
    {getFullYear()}
  </footer>
);

export default Footer;

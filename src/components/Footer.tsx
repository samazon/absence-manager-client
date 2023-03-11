import React from 'react';
import Container from './Container';
import styled from 'styled-components';

const FooterElement = styled.footer`
  padding: 1.5rem 2.4rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  background: #ff9419;

  p {
    color: #fff;
    font-size: 1.6rem;
  }
`;

const Footer = () => {
  return (
    <FooterElement>
      <Container>
        <p>Crewmeister - Absence Manager &copy; All rights reserved.</p>
      </Container>
    </FooterElement>
  );
};

export default Footer;

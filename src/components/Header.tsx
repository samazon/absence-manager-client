import React from 'react';
import Container from '@/components/Container';

import styled from 'styled-components';
import logo from '../assets/logo.png';

const HeaderMain = styled.header`
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  width: 100%;
  margin: 0 0 3rem;
`;

const Logo = styled.a`
  align-items: center;
  color: #000;
  display: flex;
  text-decoration: none;

  span {
    font-size: 2.6rem;
    font-weight: 500;
  }
`;

const LogoImage = styled.img`
  margin-right: 1.2rem;
`;

const Header: React.FC = () => {
  return (
    <HeaderMain>
      <Container>
        <Logo href="/">
          <LogoImage src={logo} height={70} />
          <span>Crewmeister</span>
        </Logo>
      </Container>
    </HeaderMain>
  );
};

export default Header;

import React from 'react';
import LoaderIcon from '../assets/loader.gif';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  align-items: center;
  border-radius: 100%;
  display: flex;
  height: 100px;
  justify-content: center;
  margin: 100px auto;
  overflow: hidden;
  width: 100px;

  img {
    height: 100px;
  }
`;

const Loader: React.FC = () => {
  return (
    <LoaderWrapper>
      <img src={LoaderIcon} alt="loader image" />
    </LoaderWrapper>
  );
};

export default Loader;

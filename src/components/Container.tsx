import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: auto;
  margin: 0 auto;
  max-width: calc(100vw - 20%);
`;

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }: ContainerProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;

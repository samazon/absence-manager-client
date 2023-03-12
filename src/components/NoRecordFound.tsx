import React from 'react';
import styled from 'styled-components';
import EmptyIcon from '../assets/empty-icon.svg';

const NoRecordFoundWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 50px;

  > div {
    align-items: center;
    background-color: aliceblue;
    border-radius: 100%;
    display: flex;
    flex-direction: column;
    height: 300px;
    justify-content: center;
    width: 300px;

    span {
      font-size: 1.6rem;
    }

    img {
      width: 90px;
    }
  }
`;

const NoRecordFound: React.FC = () => {
  return (
    <NoRecordFoundWrapper>
      <div>
        <img src={EmptyIcon} alt="empty icon" />
        <span>No Record Found.</span>
      </div>
    </NoRecordFoundWrapper>
  );
};

export default NoRecordFound;

import React from 'react';
import styled from 'styled-components';

interface StatCardProps {
  label: string;
  value: number;
}

const StyledCard = styled.div`
  align-items: center;
  background: #fff;
  border-radius: 0.8rem;
  border: 1px solid #f5f5f5;
  box-shadow: rgba(149, 157, 165, 0.2) 0 1px 2px;
  display: flex;
  justify-content: space-between;
  padding: 1.6rem;

  span {
    font-size: 1.6rem;
  }
  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }

  span:first-child {
    color: gray;
    font-weight: 300;
  }
  span:last-child {
    color: #555;
    font-weight: 500;
  }
`;

const StatCard: React.FC<StatCardProps> = ({ label, value }: StatCardProps) => {
  return (
    <StyledCard>
      <span>{label}</span>
      <span>{value}</span>
    </StyledCard>
  );
};

export default StatCard;

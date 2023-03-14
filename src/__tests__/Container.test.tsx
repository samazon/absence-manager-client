import React from 'react';
import { render } from '@testing-library/react';
import Container from '@/components/Container';

describe('Container', () => {
  it('renders its children', () => {
    const { getByText } = render(
      <Container>
        <div>Child 1</div>
        <div>Child 2</div>
      </Container>
    );

    expect(getByText('Child 1')).toBeInTheDocument();
    expect(getByText('Child 2')).toBeInTheDocument();
  });
});

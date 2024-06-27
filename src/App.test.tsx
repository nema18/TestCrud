import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';
import '@testing-library/jest-dom';

describe('Layout', () => {
  it('renders children correctly', () => {
    render(
      <Layout>
        <p>Test Child</p>
      </Layout>
    );

    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  it('renders multiple children correctly', () => {
    render(
      <Layout>
        <p>First Child</p>
        <p>Second Child</p>
      </Layout>
    );

    expect(screen.getByText('First Child')).toBeInTheDocument();
    expect(screen.getByText('Second Child')).toBeInTheDocument();
  });
});

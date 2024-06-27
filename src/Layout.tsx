import React, { ReactNode } from 'react';
import { Container } from 'react-bootstrap';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <div>
        {children}
      </div>
    </Container>
  );
};

export default Layout;

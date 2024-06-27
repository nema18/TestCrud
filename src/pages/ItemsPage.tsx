import React from 'react';
import ItemList from '../components/ItemList';
import { Container } from 'react-bootstrap';

const ItemsPage: React.FC = () => (
  <Container>
    <ItemList />
  </Container>
);

export default ItemsPage;
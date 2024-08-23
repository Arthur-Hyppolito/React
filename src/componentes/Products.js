// Products.js
import React from 'react';
import styled from 'styled-components';
import Card from './Card';

// Estilo para o contêiner dos produtos
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; 
  padding: 20px; 
  background-color: #fff; 
`;

// Componente Products
const Products = ({ products }) => (
  <Container>
    {products.map(product => (
      <Card
        key={product.id}
        imageSrc={product.imageUrl} // Aqui é imageSrc que está sendo esperado
        title={product.title}
        description={product.description}
      />
    ))}
  </Container>
);

export default Products;

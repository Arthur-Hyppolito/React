// Card.js
import React from 'react';
import styled from 'styled-components';

// Estilo para o cartão
const CardContainer = styled.div`
  background-color: #81DAF5;
  border: 1px solid #ddd;
  border-radius: 8px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px; 
  overflow: hidden;
  text-align: center; 
  transition: transform 0.3s ease; 
  
  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%; 
  height: 200px; 
  object-fit: cover; 
`;


const Title = styled.h3`
  margin: 16px 0; 
  font-size: 1.5rem; 
  color: #000000; 
`;


const Description = styled.p`
  padding: 0 16px 16px; 
  font-size: 1rem; 
  color: #2E2E2E; 
`;

const Card = ({ imageSrc, title, description }) => (
  <CardContainer>
    <Image src={imageSrc} alt={title} />
    <Title>{title}</Title>
    <Description>{description}</Description>
  </CardContainer>
);

export default Card;

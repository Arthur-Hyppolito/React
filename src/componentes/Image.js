// src/components/Image.js
import React from 'react';
import PropTypes from 'prop-types';
import './Image.css'; // Se você tiver estilos para a imagem

const Image = ({ src, alt }) => (
  <img src={src} alt={alt} className="card-image" />
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;



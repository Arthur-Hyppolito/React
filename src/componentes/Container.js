import React from 'react';
import './Container.css'; // Importa o arquivo CSS

const Container = ({ children }) => {
    return (
        <div className="container">
            {children}
        </div>
    );
};

export default Container;

import React from 'react';
import Title from './componentes/Title';
import Description from './componentes/Description';
import Products from './componentes/Products';
import image1 from './assets/images/image1.jpg'; 
import image2 from './assets/images/image2.jpg';
import Legenda from './componentes/Legenda';
import './App.css';

const App = () => (
  <div className="app-container">
    <Title className="title" />
    <Description className="description" />
    <Products products={productList} />
  </div>
);


const productList = [
  {
    "id": 1,
    "title": "Notebook DELL",
    "description": <Legenda></Legenda>,
    "imageUrl": image1
  },
  {
    "id": 2,
    "title": "Notebook DELL",
    "description": <Legenda></Legenda>,
    "imageUrl": image2
  },
  {
    "id": 3,
    "title": "Notebook DELL",
    "description": <Legenda></Legenda>,
    "imageUrl": image1
  },
  {
    "id": 4,
    "title": "Notebook DELL",
    "description": <Legenda></Legenda>,
    "imageUrl": image2
  },
  {
    "id": 5,
    "title": "Notebook DELL",
    "description": <Legenda></Legenda>,
    "imageUrl": image1
  },
  {
    "id": 6,
    "title": "Notebook DELL",
    "description": <Legenda></Legenda>,
    "imageUrl": image2
  },
  {
    "id": 7,
    "title": "Notebook DELL",
    "description": <Legenda></Legenda>,
    "imageUrl": image1
  },
  {
    "id": 8,
    "title": "Notebook DELL",
    "description": <Legenda></Legenda>,
    "imageUrl": image2
  },
  {
    "id": 9,
    "title": "Notebook DELL",
    "description": <Legenda></Legenda>,
    "imageUrl": image2
  },
  {
    "id": 10,
    "title": "Notebook DELL",
    "description": <Legenda></Legenda>,
    "imageUrl": image2
  },
  {
    "id": 11,
    "title": "Notebook DELL",
    "description":<Legenda></Legenda>,
    "imageUrl": image1
  },
  {
    "id": 12,
    "title": "Notebook DELL",
    "description": <Legenda></Legenda>,
    "imageUrl": image2
  },
  {
    "id": 13,
    "title": "Notebook DELL",
    "description": <Legenda></Legenda>,
    "imageUrl": image1
  },
{
    "id": 14,
    "title": "Notebook DELL",
    "description": <Legenda></Legenda>,
    "imageUrl": image2
  },
  {
    "id": 15,
    "title": "Notebook DELL",
    "description": <Legenda></Legenda>,
    "imageUrl": image1
  },
  {
    "id": 16,
    "title": "Notebook DELL",
    "description": <Legenda></Legenda>,
    "imageUrl": image2
  },
  {
    "id": 17,
    "title": "Notebook DELL",
    "description": <Legenda></Legenda>,
    "imageUrl": image1
  },
  {
    "id": 18,
    "title": "Notebook DELL",
    "description": <Legenda></Legenda>,
    "imageUrl": image2
  },
  {
    "id": 19,
    "title": "Notebook DELL",
    "description":<Legenda></Legenda>,
    "imageUrl": image1
  },
  {
    "id": 20,
    "title": "Notebook DELL",
    "description": <Legenda></Legenda>,
    "imageUrl": image1
  }
];


export default App;

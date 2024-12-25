import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './styles.css';


const products = [
   {
      name: 'Nike Metcon 1',
      price: '130',
      color: 'red',
      img: './1.jpg',
   },
   {
      name: 'Nike Metcon 2',
      price: '130',
      color: 'green',
      img: './2.jpg',
   },
   {
      name: 'Nike Metcon 3',
      price: '130',
      color: 'blue',
      img: './3.jpg',
   },
   {
      name: 'Nike Metcon 6',
      price: '130',
      color: 'black',
      img: './4.jpg',
   },
   {
      name: 'Nike free run',
      price: '170',
      color: 'black',
      img: './5.jpg',
   },
   {
      name: 'Nike Metcon 4',
      price: '150',
      color: 'green',
      img: './6.jpg',
   },
];

const cardsLayout = {
   xs: 12,
   sm: 8,
   md: 6,
   lg: 4,
};

ReactDOM.createRoot(document.getElementById('root')).render(
   <StrictMode>
      <App layout={cardsLayout} products={products} />,
   </StrictMode>
);

import React, { Fragment } from 'react';
import './App.css';
import Button from './components/Button';
import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import story from './assets/our_story.png';
import Product from './components/Product';
import Tile from './components/Tile';

function App() {
  return (
    <>
      <h1>Handbags & Purses</h1>
      <nav>
        <Button name='to the collection' />
        <Button name='shop all bags' />
        <Button name='pre-order' disabled={true} />
      </nav>

      <main>
        <Product
          tag='bestseller'
          name='the handy bag'
          price='400'
          src={bag_1}
        />
        <Product
          tag='bestseller'
          name='the stylish bag'
          price='250'
          src={bag_2}
        />
        <Product
          tag='new collection'
          name='the simple bag'
          price='300'
          src={bag_3}
        />
        <Product
          tag='bestseller'
          name='the trendy bag'
          price='150'
          src={bag_4}
        />
      </main>

      <footer>
        <Tile title='The Brand' />
        <Tile
          title='Our Story'
          text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto eaque autem sint sit quae sed, enim doloremque amet accusantium, adipisci iure'
          imgsrc={brand}
        />
        <Tile
          title='Our Story'
          imgsrc={story}
          text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto eaque autem sint sit quae sed, enim doloremque amet accusantium, adipisci iure expedita molestiae natus, reprehenderit aliquid rerum voluptatem dolor non?'
        />
        <Tile
          title='Our Story'
          text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto eaque autem sint sit quae sed, enim doloremque amet accusantium, adipisci iure expedita molestiae natus, reprehenderit aliquid rerum voluptatem dolor non?'
        />
      </footer>
    </>
  );
}

export default App;

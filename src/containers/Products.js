// jshint esversion: 9
// import React, { useContext } from 'react';
import React from 'react';
// import { useSelector } from 'react-redux';

import ProductItem from '../components/Products/ProductItem';
import './Products.css';
import { useStore } from '../hooks-store/store';
// import { ProductsContext } from '../context/products-context';

const Products = props => {
  // this hook is simply used to select a slice of our state. the shop slice which we create in it index.js here. By combining our reducer.
  // const productList = useSelector(state => state.shop.products);

  //  to get access to that context. I simply get my product list here if you will by accessing this context here and there my products.
  // this will be my list of products which is recreated whenever we change something in that list.
  // const productList = useContext(ProductsContext).products;

  //That's what we get back from use store.  I'm not interested in the Dispatch function
  const state = useStore()[0]
  return (
    <ul className="products-list">
      {state.products.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;

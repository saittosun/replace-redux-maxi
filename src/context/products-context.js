// jshint esversion: 9
import React, { useState } from 'react';

export const ProductsContext = React.createContext({
  products: []
});

export default props => {
  const [productsList, setProductsList] = useState([
    {
      id: 'p1',
      title: 'Red Scarf',
      description: 'A pretty red scarf.',
      isFavorite: false
    },
    {
      id: 'p2',
      title: 'Blue T-Shirt',
      description: 'A pretty blue t-shirt.',
      isFavorite: false
    },
    {
      id: 'p3',
      title: 'Green Trousers',
      description: 'A pair of lightly green trousers.',
      isFavorite: false
    },
    {
      id: 'p4',
      title: 'Orange Hat',
      description: 'Street style! An orange hat.',
      isFavorite: false
    }
  ])
  return (
    // I assign this to my products key here in that object I pass as a value to my products context provider.
    // So now whenever this value here changes whenever we update the state and therefore this component rebuilt. Whenever that happens our provider will get a new value and every child that listens to our provider will be able to get that new value.
    <ProductsContext.Provider value={{products: productsList}}>
      {props.children}
    </ProductsContext.Provider>
  )
}
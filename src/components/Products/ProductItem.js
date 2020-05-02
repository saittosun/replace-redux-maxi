// jshint esversion: 9
import React from 'react';
// import { useDispatch } from 'react-redux';

import {useStore} from '../../hooks-store/store';
import Card from '../UI/Card';
import './ProductItem.css';
// import { ProductsContext } from '../../context/products-context';
// import { toggleFav } from '../../store/actions/products';

const ProductItem = React.memo(props => {//React memo around design and should make sure they don't render if their props didn't change at the props for the other item certainly didn't change.
  console.log('rendering');
  const dispatch = useStore(false)[1];
  // const dispatch = useDispatch();

  // const toggleFav = useContext(ProductsContext).toggleFav;

  const toggleFavHandler = () => {
    // toggleFav(props.id)
    dispatch('TOGGLE_FAV', props.id);
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
});

export default ProductItem;

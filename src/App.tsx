import { useState} from 'react';
import { useQuery} from 'react-query';

// Componenets
import { LinearProgress, Drawer, Grid, Badge } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

// Styles
import {Wrapper} from './App.styles';

// Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: string;
}

// Fetching from fakestore API

const getProductData = async (): Promise<CartItemType[]> => 
await(await fetch('https://fakestoreapi.com/products')).json();

const App = () => {
  const {data, isLoading, error} = useQuery<CartItemType[]>(
    'products',
    getProductData
  )
  console.log(data);
  return (
    <div className="App">
    <h1>Getting Started</h1>
    </div>
  );
}

export default App;

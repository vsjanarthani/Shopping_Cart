import { useState} from 'react';
import { useQuery} from 'react-query';

// Componenets
import { LinearProgress, Drawer, Grid, Badge } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Item from './Components/Item/Item';

// Styles
import {AppWrapper} from './App.styles';

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

// Function to fetch from fakestore API
const getProductData = async (): Promise<CartItemType[]> => 
await(await fetch('https://fakestoreapi.com/products')).json();

// Function to get Cart total
const getCartTotal = () => null;

// Function to add items to cart
const addCartItem = (selectedItem: CartItemType) => null;

// Function to remove items from cart
const removeCartItem = () => null;

// App
const App = () => {
  const {data, isLoading, error} = useQuery<CartItemType[]>(
    'products',
    getProductData
  )
  console.log(data);

  // return
  if(isLoading) return (
  <div> 
    <h3>Loading Please Wait..</h3>
  <LinearProgress />
  </div> );
  if(error) return <div>Something Went Wrong. Please Try Again Later..</div>
    return (
      <AppWrapper>
        <Grid container spacing={3}>
         {data?.map(item => (
           <Grid item key={item.id} xs={12} sm={4}> 
           <Item item={item} addCartItem={addCartItem} />
           </Grid>
         ))}
        </Grid>
      </AppWrapper>
     );  
}

export default App;

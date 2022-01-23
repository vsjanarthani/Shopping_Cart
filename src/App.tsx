import { useState} from 'react';
import { useQuery} from 'react-query';

// Componenets
import { LinearProgress, Drawer, Grid, Badge } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Item from './Components/Item/Item';

// Styles
import {AppWrapper, StyledButton} from './App.styles';

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

// App
const App = () => {
  // useState
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  // useQuery
  const {data, isLoading, error} = useQuery<CartItemType[]>(
    'products',
    getProductData
  )
  // console.log(data);

  // Function to get Cart total
const getCartTotal = (items: CartItemType[]) => null;
  
  // Function to add items to cart
  const addCartItem = (selectedItem: CartItemType) => null;

  // Function to remove items from cart
  const removeCartItem = (selectedItem: CartItemType[]) => null;

  // return
  if(isLoading) return (
    <Grid>
      <h1>Loading...</h1>
      <LinearProgress />
    </Grid>
  );
  if(error) return <div>Something Went Wrong. Please Try Again Later..</div>
    return (
      <AppWrapper>
        <Drawer anchor='right' open={cartOpen} onClose={()=> setCartOpen(false)}>
          Cart
        </Drawer>
        <StyledButton onClick={()=> setCartOpen(true)} />
        <Badge badgeContent={getCartTotal(cartItems)} color='error'> 
        <AddShoppingCartIcon />
        </Badge>
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

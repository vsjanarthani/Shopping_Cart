import { useState} from 'react';
import { useQuery} from 'react-query';

// Componenets
import { LinearProgress, Drawer, Grid, Badge } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Item from './Components/Item/Item';
import Cart from './Components/Cart/Cart';

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
  amount: number;
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
  const getCartTotal = (items: CartItemType[]) => {
    console.log(items);
    if(items.length === 0) return "0";
    return items.length;
  }
  
  // Function to add items to cart
  const addCartItem = (selectedItem: CartItemType) => {
    console.log(selectedItem);
    setCartItems(prev => {
      // check if item already added to the cart
      const isItemInCart = prev.find(item => item.id === selectedItem.id);
      if(isItemInCart) {
        return prev.map(item => {
          item.id === selectedItem.id ? {...item, amount: item.amount + 1}
          : item
        });
      };
    // first time the item is added 
      return [...prev, {...selectedItem, amount: 1}]
    })
  }

  // Function to remove items from cart
  const removeCartItem = (id: number) => {
    setCartItems(prev => 
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
  };

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
          <Cart cartItems={cartItems} addCartItem={addCartItem} removeCartItem={removeCartItem}/>
        </Drawer>
        <StyledButton onClick={()=> setCartOpen(true)}>
        <Badge badgeContent={getCartTotal(cartItems)} color='error'> 
        <AddShoppingCartIcon />
        </Badge>
        </StyledButton>
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

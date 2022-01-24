import styled from 'styled-components';

export const CartItemWrapper = styled.div`
 display: flex;
 justify-content: space-between;
 font-family: Arial, Helvetica, sans-serif;
 border-bottom: 1px solid grey;
 padding-bottom: 20px;

 div {
     flex: 1;
 }

 .cartinfo
 .cartbutton {
     display: flex;
     justify-content: space-between;
 }

 img {
     max-width: 10rem;
     margin-left: 40px;
 }
`
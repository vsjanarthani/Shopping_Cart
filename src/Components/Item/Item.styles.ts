import styled from "styled-components";

export const ItemWrapper = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
width: 100%;
height: 100%;
border: 1px solid grey;
border-radius; 20px;

button {
    border: 1px solid grey;
    margin: 0 10px 10px 10px;
    border-radius: 20px 20px 20px 20px;
    background: papayawhip;
}

img {
    max-height: 250px;
    padding: 1rem;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
}

div {
    font-fmaily: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
}

p {
    color: grey;
}

`;
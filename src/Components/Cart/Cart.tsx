import CartItem from "../CartItem/CartItem";
// Styles
import { CartWrapper } from "./Cart.styles";
// Types
import { CartItemType } from '../../App';

// Type Props
type Props = {
    cartItems: CartItemType[];
    addCartItem: (selectedItem: CartItemType) => void;
    removeCartItem: (id: number) => void;
};

const Cart: React.FC<Props> = ({cartItems, addCartItem, removeCartItem}) => {
    

    return (
        <CartWrapper>
            <h2>Cart Items</h2>
            {cartItems.length === 0? <p> Cart is Empty</p> : null}
            {cartItems.map(item => (
                <CartItem 
                    key={item.id}
                    item={item}
                    addCartItem={addCartItem}
                    removeCartItem={removeCartItem}
                    />
            ))}
        </CartWrapper>
    );
};

export default Cart;
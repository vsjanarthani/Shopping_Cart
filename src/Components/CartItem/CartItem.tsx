import {Button} from '@material-ui/core/';
// Types
import { CartItemType } from '../../App';
// Styles
import { CartItemWrapper } from './CartItem.styles';

// Type Props
type Props = {
    item: CartItemType;
    addCartItem: (selectedItem: CartItemType) => void | CartItemType[];
    removeCartItem: (id: number) => void;
};

const CartItem: React.FC<Props> = ({item, addCartItem, removeCartItem}) => (
    <CartItemWrapper>
        <div>
            <h3>{item.title}</h3>
            <div className='cartinfo'>
                <p>Price: ${item.price}</p>
                <p>Total: ${(item.price * item.amount).toFixed(2)}</p>
            </div>
            <div className='cartbutton'>
                <Button 
                size='small'
                disableElevation
                variant='contained'
                onClick={()=> removeCartItem(item.id)}
                >
                    -
                </Button>
                <p>{item.amount}</p>
                <Button 
                size='small'
                disableElevation
                variant='contained'
                onClick={()=> addCartItem(item)}
                >
                    +
                </Button>
            </div>
        </div>
        <img src={item.image} alt={item.title} />
    </CartItemWrapper>
)

export default CartItem;
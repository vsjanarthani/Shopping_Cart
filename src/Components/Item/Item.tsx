// Components
import { Button } from '@material-ui/core';

// Types
import { CartItemType } from '../../App';

// Styles
import { ItemWrapper } from './Item.styles';

// Type assignment
type ItemProps = {
    item: CartItemType;
    addCartItem: (selectedItem: CartItemType) => void;
}

// Item
const Item: React.FC<ItemProps> = ({item, addCartItem}) => ( 
    <ItemWrapper>
        <img src={item.image} alt={item.title} />
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>${item.price}</h3>
        </div>
        <Button onClick={()=> addCartItem (item)}> Add to Cart</Button>
    </ItemWrapper>
);

export default Item;
import React, { useContext } from 'react';
import { Item, Header, Button, Icon, Input } from 'semantic-ui-react';

import { CartItemsContext } from '../pages/Products'

const CartItems = (props) => {
    const helpFnc = useContext(CartItemsContext)

    return (
        <>
            <Item.Image size='tiny' src={props.item.media.source} />
            <Item.Content verticalAlign='middle'>
                <Item.Header className='cart-item-name'>{props.item.name}</Item.Header>
                <div className='quantity-group'>
                    <Button
                        negative
                        className='quan-buttons'
                        onClick={() => {
                            let newQuantity = props.item.quantity - 1
                            helpFnc.subtractQuantity(props.item.id, newQuantity)
                        }}
                    >
                        <Icon name='minus' />
                    </Button>
                    <Input
                        className='input-quantity'
                        value={props.item.quantity}
                    />
                    <Button
                        positive
                        className='quan-buttons'
                        onClick={() => {
                            let newQuantity = props.item.quantity + 1
                            helpFnc.addQuantity(props.item.id, newQuantity)
                        }}
                    >
                        <Icon name='plus' />
                    </Button>
                </div>
                <Item.Extra className='item-total'>
                    <Header floated='right'>{props.item.line_total.formatted_with_symbol}</Header>
                </Item.Extra>
            </Item.Content>
        </>
    );
};

export default CartItems;
import React from 'react';
import { Button, Modal, Header, Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import CartItems from './CartItems'

const CartModal = (props) => {
    return (
        <>
            {props.cart && props.cart.total_unique_items > 0 ? (
                <>
                    <Item.Group divided>
                        {props.cart.line_items.map(item => (
                            <Item key={item.id}>
                                <CartItems item={item}/>
                            </Item>
                        ))}
                    </Item.Group>

                    <Modal.Actions className='modal-bottom'>
                        <Button
                            basic 
                            negative  
                            floated='left' 
                            onClick={props.emptyCart}
                        >
                            Limpar Carrinho
                        </Button>
                        <Header floated='right'>{props.cart.subtotal.formatted_with_symbol}</Header>
                        <Link to='checkout'>
                            <Button
                                color='green'
                                floated='right'
                            >
                                Finalizar Compra
                            </Button>
                        </Link>
                    </Modal.Actions>
                </>
            ) 
            :
            (
                <>
                    <Modal.Header>Carrinho</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Header>Seu carrinho está atualmente vazio.</Header>
                            <p>
                                Que tal comprar alguma coisa?
                            </p>
                        </Modal.Description>
                    </Modal.Content>
                </>
            )
            }
        </>
    );
};

export default CartModal;
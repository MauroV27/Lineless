import React from 'react';
import { Menu, Image, Icon, Segment, Modal} from 'semantic-ui-react'
import logo from '../img/logo-h.png'

import CartModal from './CartModal'

const Nav = (props) => {

    const iconDisplay = () => {

        if (props.cart && props.cart.total_unique_items > 0) {
            return(
                <div className='cartButton'>
                    <Icon name='shopping cart' size='large'/>
                    {props.cart.total_unique_items}
                </div>
            )
        } else {
            return (
                <Icon name='shopping cart' size='large'/>
            )
        }
    }


    return (
        <Menu className='menu' borderless> 
            <Segment className='nav-segment'>
                <Menu.Item>
                    <Image src={logo} size='small' />
                </Menu.Item>
                <Menu.Item position='right' style={{cursor: 'pointer'}}>
                    <Modal trigger={iconDisplay()} className='cart-modal' closeIcon >
                        <CartModal cart={props.cart} emptyCart={props.emptyCart}/>
                    </Modal>
                </Menu.Item>
            </Segment>
        </Menu>
    );
};

export default Nav
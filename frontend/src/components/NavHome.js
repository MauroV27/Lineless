import React from 'react';
import { Menu, Image, Segment} from 'semantic-ui-react'
import logo from '../img/logo-h.png'

const Nav = (props) => {
    return (
        <Menu className='menu' borderless> 
            <Segment className='nav-segment'>
                <Menu.Item>
                    <Image src={logo} size='small' />
                </Menu.Item>
            </Segment>
        </Menu>
    );
};

export default Nav
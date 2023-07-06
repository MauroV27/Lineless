import React, { useState, useContext } from 'react';
import {
  Navbar,
  NavbarBrand,
  Button,
  Modal,
  ModalHeader,
  ModalBody
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import Cart from './cart/Cart';
import CartContext from '../context/CartContext';
import logo from '../images/lineless_logo_white_h.jpg'

const Nav = () => {
  const { cart } = useContext(CartContext);
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  let cartItems = cart && cart.total_unique_items > 0 ? cart.total_unique_items : '';
  return (
    <Navbar>
      <NavbarBrand href="/">
        <img src={logo} width={903} height={209} alt="Logo" />
      </NavbarBrand>
      <Button onClick={toggleModal} color="primary">
        <FontAwesomeIcon icon={faCartArrowDown} />
        <span className="icon-button-text-right">{cartItems}</span>
      </Button>
      <Modal isOpen={modal} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>Carrinho</ModalHeader>
        <ModalBody>
          <Cart />
        </ModalBody>
      </Modal>
    </Navbar>
  )
}

export default Nav;
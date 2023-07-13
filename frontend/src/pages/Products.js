import React, { useEffect, useState } from 'react';
import Commerce from '@chec/commerce.js'
import { Grid } from 'semantic-ui-react';
import Nav from '../components/Nav'
import ProductContainer from '../components/ProductContainer'

export const CartItemsContext = React.createContext()

export function Products() {

    const commerce = new Commerce(process.env.REACT_APP_PUBLICKEY_SANDBOX)

    const [cart, setCart] = useState()

    useEffect(() => {
        commerce.cart.retrieve()
            .then(res => {
                setCart(res)
            })
    }, [commerce.cart])

    const cartHelperFunctions = {

        deleteItem: (lineItemId) => {
            commerce.cart.remove(lineItemId)
                .then(res => {
                    setCart(res.cart)
                })
        },
        addQuantity: (lineItemId, newQuantity) => {
            commerce.cart.update(lineItemId, { quantity: newQuantity })
                .then(res => {
                    setCart(res.cart)

                })
        },
        subtractQuantity: (lineItemId, newQuantity) => {

            if (newQuantity === 0) {
                cartHelperFunctions.deleteItem(lineItemId)
            } else {
                commerce.cart.update(lineItemId, { quantity: newQuantity })
                    .then(res => {
                        setCart(res.cart)
                    })
            }

        }
    }

    const addToCart = (productId) => {
        commerce.cart.add(productId, 1)
            .then(res => {
                setCart(res.cart)
            })
    }

    const emptyCart = () => {
        console.log('works')
        commerce.cart.empty()
            .then(res => {
                console.log(res, 'res from empty cart')
                setCart(null)
            })
    }

    return (
        <div className="App">
            <CartItemsContext.Provider value={cartHelperFunctions}>
                <Nav cart={cart} emptyCart={emptyCart} />
            </CartItemsContext.Provider>

            <Grid centered stackable padded relaxed>
                <Grid.Column width={9}>
                    <ProductContainer
                        addToCart={addToCart}
                    />
                </Grid.Column>
            </Grid>
        </div>
    );
}




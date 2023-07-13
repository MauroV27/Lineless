import React from 'react';
import { Card, Image, Button, Icon} from 'semantic-ui-react';

const ProductCard = (props) => {
    const handleButtonAddCart = e => {
        e.preventDefault()
        props.addToCart(props.product.id)
    }

    return (
        <Card centered className='product-card'>
            <Image className='product-img' src={props.product.media.source}/>
            <Card.Content>
                <Card.Header>{props.product.name}</Card.Header>
                <Card.Meta>{props.product.price.formatted_with_symbol}</Card.Meta>
                <Card.Description>{props.product.description.replace(/(<([^>]+)>)/ig,"")}</Card.Description>
                <Button fluid className='add-button' onClick={handleButtonAddCart}>
                    Adicionar ao Carrinho
                    <Icon name='arrow right' />
                </Button>
            </Card.Content>
        </Card>
    );
};

export default ProductCard;

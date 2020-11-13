import React from 'react'
import { CartItemStyles, ImageStyle, ItemDetailStyle } from './cart-item.styles'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemStyles>
        <ImageStyle src={imageUrl} alt='item' />
        <ItemDetailStyle>
            <span>{name}</span>
            <span>
                {quantity} X ${price}
            </span>
        </ItemDetailStyle>
    </CartItemStyles>
)

export default CartItem
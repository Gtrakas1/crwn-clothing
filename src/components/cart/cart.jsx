import React from 'react'
import { connect } from 'react-redux'
import CartItem from '../cart-item/cart-item'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { setCartAction } from '../../redux/cart/cart.action'
import { CartButtonStyle, CartDropDownStyles, CartItemStyle, EmptyMessageStyle } from './cart.styles'


const CartDropdown = ({ cartItems, history, dispatch, ...props }) => (

    <CartDropDownStyles>
        <CartItemStyle>
            {
                cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                )
                    :
                    (
                        <EmptyMessageStyle>Your cart is empty</EmptyMessageStyle>
                    )
            }
        </CartItemStyle>
        <CartButtonStyle onClick={() => {
            history.push('/checkout');
            dispatch(setCartAction())
        }}>GO TO CHECKOUT</CartButtonStyle></CartDropDownStyles>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
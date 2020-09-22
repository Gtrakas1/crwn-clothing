import React from 'react'
import './cart.scss'
import { connect } from 'react-redux'
import CustomButton from '../custom-button/custom-button'
import CartItem from '../cart-item/cart-item'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { setCartAction } from '../../redux/cart/cart.action'


const CartDropdown = ({ cartItems, history, dispatch }) => (

    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                )
                    :
                    (
                        <span className='empty-message'>Your cart is empty</span>
                    )
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(setCartAction())
        }}>GO TO CHECKOUT</CustomButton></div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
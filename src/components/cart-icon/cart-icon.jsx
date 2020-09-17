import React from 'react';
import { connect } from 'react-redux'
import { setCartAction } from '../../redux/cart/cart.action'

import { ReactComponent as ShoppingIcon } from '../../assests/images/shopping-bag.svg'

import './cart-icon.scss'

const CartIcon = ({ setCartAction }) => (

    <div className='cart-icon' onClick={setCartAction}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = dispactch => ({
    setCartAction: () => dispactch(setCartAction())
})

export default connect(
    null,
    mapDispatchToProps
)(CartIcon)
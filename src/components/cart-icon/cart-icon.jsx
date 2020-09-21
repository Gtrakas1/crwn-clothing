import React from 'react';
import { connect } from 'react-redux'
import { setCartAction } from '../../redux/cart/cart.action'

import { ReactComponent as ShoppingIcon } from '../../assests/images/shopping-bag.svg'

import './cart-icon.scss'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ setCartAction, itemCount }) => (

    <div className='cart-icon' onClick={setCartAction}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispactch => ({
    setCartAction: () => dispactch(setCartAction())
})

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,

)(CartIcon)
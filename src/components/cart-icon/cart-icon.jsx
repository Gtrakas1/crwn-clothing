import React from 'react';
import { connect } from 'react-redux'
import { setCartAction } from '../../redux/cart/cart.action'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { CartIconStyles, ItemCountStyles, ShopIconStyles } from './cart.-icon.styles';

const CartIcon = ({ setCartAction, itemCount }) => (

    <CartIconStyles onClick={setCartAction}>
        <ShopIconStyles />
        <ItemCountStyles>{itemCount}</ItemCountStyles>
    </CartIconStyles>
)

const mapDispatchToProps = dispactch => ({
    setCartAction: () => dispactch(setCartAction())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,

)(CartIcon)
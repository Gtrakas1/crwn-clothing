import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button'
import { CheckoutConStyle, Total, TestWarning, CheckOutHeadStyle, HeaderBlockStyle } from './checkout.styles'

const CheckoutPage = ({ cartItems, total }) => (

    <CheckoutConStyle>
        <CheckOutHeadStyle>
            <HeaderBlockStyle>
                <span>Product</span>
            </HeaderBlockStyle>
            <HeaderBlockStyle>
                <span>Description</span>
            </HeaderBlockStyle>
            <HeaderBlockStyle>
                <span>Quantity</span>
            </HeaderBlockStyle>
            <HeaderBlockStyle>
                <span>Price</span>
            </HeaderBlockStyle>
            <HeaderBlockStyle>
                <span>Remove</span>
            </HeaderBlockStyle>

        </CheckOutHeadStyle>
        {
            cartItems.map(cartItem =>
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )
        }
        <Total className='total'>
            Total: ${total}
        </Total>
        <TestWarning>
            *Please use the following for test credit card payments
        <br />
        4242 4242 4242 4242 - Exp: 01/24 - CVV: 123 </TestWarning>
        <StripeCheckoutButton price={total} />
    </CheckoutConStyle>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)
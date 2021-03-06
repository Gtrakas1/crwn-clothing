import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CartDropdown from '../cart/cart'
import { ReactComponent as Logo } from '../../assests/images/crown.svg'
import CartIcon from '../cart-icon/cart-icon';
import { selectHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './header.styles';
import { signOutStart } from '../../redux/user/user.action'

const Header = ({ currentUser, hidden, signOutStart }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
        </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
        </OptionLink>
            {
                currentUser ? (
                    <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>
                ) :
                    (<OptionLink className='option' to='/signin'>SIGN IN</OptionLink>
                    )}
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null :
                <CartDropdown />}
    </HeaderContainer>

);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectHidden
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})



export default connect(mapStateToProps, mapDispatchToProps)(Header);
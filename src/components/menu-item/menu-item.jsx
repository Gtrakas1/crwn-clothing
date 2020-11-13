import React from 'react'
import { withRouter } from 'react-router-dom'
import { BackgroundImage, ContextMenuStyle, ContextSubTitle, ContextTitle, MenuStyle } from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <MenuStyle
        size={size}
        onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <BackgroundImage className='background-image'
            imageUrl={imageUrl}
        />
        <ContextMenuStyle className='content'>
            <ContextTitle>{title.toUpperCase()}</ContextTitle>
            <ContextSubTitle>SHOP NOW</ContextSubTitle>
        </ContextMenuStyle>
    </MenuStyle>


)

export default withRouter(MenuItem);
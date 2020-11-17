import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.action'
import { Collectionfooter, CollectionItemContainerStyle, Name, Price, CollectionItemImageStyle, AddButton } from './collection-item.styles'

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <CollectionItemContainerStyle>
            <CollectionItemImageStyle className='image' imageUrl={imageUrl} />
            <Collectionfooter>
                <Name>{name}</Name>
                <Price className='price'>{price}</Price>
            </Collectionfooter>
            <AddButton onClick={() => addItem(item)} inverted>
                Add to Cart</AddButton>
        </CollectionItemContainerStyle>
    )

}

const mapDispatchToProps = dispacth => ({
    addItem: item => dispacth(addItem(item))
})

export default connect(
    null,
    mapDispatchToProps)
    (CollectionItem)
import React from 'react'
import { selectCollection } from '../../redux/shop/shop.selector'
import { connect } from 'react-redux'
import CollctionItem from '../../components/collection-item/collection-item'
import { CollectionConStyle, Items } from './collection.styles'
import { Title } from '../../components/sign-up/sign-up.styles'


const CollectionPage = ({ collection }) => {
    const { title, items } = collection
    return (
        <CollectionConStyle>
            <Title>{title}</Title>
            <Items>
                {
                    items.map(item => (
                        <CollctionItem key={item.id} item={item} />
                    ))
                }</Items>
        </CollectionConStyle>
    )

}


const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)
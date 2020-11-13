import React from 'react';
import PreviewCollection from '../preview_collection/preview_collection';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { OverViewContainerStyle } from './collections-overview.styles';

const CollectionOverview = ({ collections }) => (

    <OverViewContainerStyle>
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <PreviewCollection key={id} {...otherCollectionProps} />
            ))
        }
    </OverViewContainerStyle>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview)
import React from 'react';
import PreviewCollection from '../preview_collection/preview_collection';
import './collections-overview.scss'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

const CollectionOverview = ({ collections }) => (

    <div className='collections-overview'>
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <PreviewCollection key={id} {...otherCollectionProps} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview)
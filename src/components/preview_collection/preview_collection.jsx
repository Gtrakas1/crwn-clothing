import React from 'react'
import CollectionItem from '../collection-item/collection-item'
import { PreviewCollectionStyle, Preview, PreviewTitle } from './preview-colloection.styles'

const PreviewCollection = ({ title, items }) => (
    <PreviewCollectionStyle>
        <PreviewTitle>{title.toUpperCase()}</PreviewTitle>
        <Preview>
            {items
                .filter((item, idx) => idx < 4)
                .map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))

            }
        </Preview>
    </PreviewCollectionStyle>)

export default PreviewCollection
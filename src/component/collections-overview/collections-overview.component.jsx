import React from 'react'
import { connect } from 'react-redux'
import CollectionPreview from '../collection.preview/collectionPreview.component.jsx'
import { createStructuredSelector } from 'reselect'
import { CollectionsOverviewContainer } from './collections-overview.styles'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview)
import React from "react";
import { connect } from "react-redux";

import "./styles.scss";

import CollectionPreview from "components/CollectionPreview";

import { selectCollectionsForPreview } from "redux/reducers/shop/selectors";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections &&
        collections.map(({ id, ...rest }) => (
          <CollectionPreview key={id} {...rest} />
        ))}
    </div>
  );
};

export default connect(state => ({
  collections: selectCollectionsForPreview(state)
}))(CollectionOverview);

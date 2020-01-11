import React from "react";

import "./styles.scss";

import CollectionItem from "components/CollectionItem";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items.slice(0, 4).map(({ id, ...rest }) => (
          <CollectionItem key={id} {...rest} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;

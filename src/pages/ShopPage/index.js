import React from "react";

import CollectionPreview from "components/CollectionPreview";

import SHOP_DATA from "pages/HomePage/data";

const ShopPage = () => {
  return (
    <div className="shop-page">
      {SHOP_DATA &&
        SHOP_DATA.map(({ id, ...rest }) => (
          <CollectionPreview key={id} {...rest} />
        ))}
    </div>
  );
};

export default ShopPage;

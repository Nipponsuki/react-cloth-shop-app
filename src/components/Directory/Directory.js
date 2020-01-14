import React from "react";
import { connect } from "react-redux";

import MenuItem from "components/MenuItem/MenuItem";

import "./styles.scss";

import { selectDirectorySections } from "redux/reducers/directory/selectors";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, id, size, linkUrl }) => (
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          size={size}
          linkUrl={linkUrl}
        />
      ))}
    </div>
  );
};

export default connect(state => ({ sections: selectDirectorySections(state) }))(
  Directory
);

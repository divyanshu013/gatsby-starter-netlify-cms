import CMS from "netlify-cms-app";
import React from "react";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import ProductPagePreview from "./preview-templates/ProductPagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";

class Control extends React.Component {
  render() {
    const { value, field, forID, classNameWrapper, onChange } = this.props;
    return (
      <input
        id={forID}
        className={classNameWrapper}
        value={value}
        name="github"
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }
}

CMS.registerWidget(
  "github",
  Control,
  ({ value, field, metadata, getAsset, entry, fieldsMetaData }) => {
    return <a href={`https://github.com/${value}`}>U {value}</a>;
  }
);

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("products", ProductPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);

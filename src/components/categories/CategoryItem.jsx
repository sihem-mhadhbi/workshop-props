import React from "react";
import PropTypes from "prop-types";
const CategoryItem = ({ category, children, title }) => {
  const { categoryName, description, image } = category;
  return (
    <div className="col-md-3">
      {title}
      <div className="card">
        {/* <img
          style={{ height: 200, objectFit: "cover" }}
          src={image}
          className="card-img-top"
          alt="..."
        /> */}
        {children}
        <div className="card-body">
          <h3 className="card-title text-primary">{categoryName}</h3>
          <p className="card-text">{description}</p>
          <a href="#!" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};
CategoryItem.propTypes = {
  category: PropTypes.object.isRequired,
};
CategoryItem.defaultProps = {
  title: "default title",
};

export default CategoryItem;

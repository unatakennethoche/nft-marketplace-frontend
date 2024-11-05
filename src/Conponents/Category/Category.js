import React from "react";
import creatorbackground1 from "../images/creatorbackground-1.jpeg";
import "../Category/Category.scss";
import { BsCircleFill } from "react-icons/bs";

function Category() {
  const categoryArray = [1, 2, 3.4, 5, 6];
  return (
    <div className="container category-section">
      <div className="row category-box">
        {categoryArray.map((el, i) => (
          <div className="col-12 col-md-2 g-3 category-box-display" key={i + 1}>
            <img
              src={creatorbackground1}
              alt="NFTs creator image"
              width={250}
              height={100}
              objectFit="cover"
              className="category-image"
            />
            <div className="category-display-info-box">
              <span>
                <BsCircleFill />
              </span>
              <div className="category-display-info">
                <h4>Entertainment</h4>
                <small>1999 NFTs</small>
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
    </div>
  );
}

export default Category;

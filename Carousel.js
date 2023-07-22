import React, { useState } from "react";
import "./Carousel.css";
import Card from "./Card";

/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);
  const total = photos.length;

  const handleLeftArrowClick = () => {
    setCurrCardIdx((prevIndex) => (prevIndex - 1 + total) % total);
  };

  const handleRightArrowClick = () => {
    setCurrCardIdx((prevIndex) => (prevIndex + 1) % total);
  };

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        {currCardIdx !== 0 && (
          <i
            className="bi bi-arrow-left-circle carousel-control-prev"
            onClick={handleLeftArrowClick}
          />
        )}
        <Card
          caption={photos[currCardIdx].caption}
          src={photos[currCardIdx].src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        {currCardIdx !== total - 1 && (
          <i
            className="bi bi-arrow-right-circle carousel-control-next"
            onClick={handleRightArrowClick}
          />
        )}
      </div>
    </div>
  );
}

export default Carousel;

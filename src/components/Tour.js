import React, { useState } from "react";

const Tour = ({ tour, deleteHandler }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="tour">
      <img src={tour.image} alt={tour.name} className="tourImg" />
      <span className="price">${tour.price}</span>
      <div className="tourInfo">
        <h5>{tour.name}</h5>
        <p>
          {readMore ? `${tour.info} ` : `${tour.info.substring(0, 100)} `}
          <button className="readToggle" onClick={() => setReadMore(!readMore)}>
            {readMore ? "Show Less" : "...Read More"}
          </button>
        </p>
        <button className="deleteBtn" onClick={() => deleteHandler(tour.id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default Tour;

import React from "react";
import starLogo from "../assets/star.png";

export default function ReviewStars({ selectStarRating, test }) {
  return (
    <div className="review-stars-container">
      <img
        src={starLogo}
        alt=""
        className="star"
        id="one-star"
        onClick={() => selectStarRating(1)}
      />

      <img
        src={starLogo}
        alt=""
        className="star"
        id="two-star"
        onClick={() => selectStarRating(2)}
      />

      <img
        src={starLogo}
        alt=""
        className="star"
        id="three-star"
        onClick={() => selectStarRating(3)}
      />

      <img
        src={starLogo}
        alt=""
        className="star"
        id="four-star"
        onClick={() => selectStarRating(4)}
      />

      <img
        src={starLogo}
        alt=""
        className="star"
        id="five-star"
        onClick={() => selectStarRating(5)}
      />
    </div>
  );
}

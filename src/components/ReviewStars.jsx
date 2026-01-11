import React from "react";
import starLogo from "../assets/star.png";
import { useEffect } from "react";

export default function ReviewStars({ selectStarRating, stars }) {
  return (
    <div className="review-stars-container">
      <img
        src={starLogo}
        alt=""
        className={stars.one}
        id="one-star"
        onClick={() => selectStarRating(1)}
      />

      <img
        src={starLogo}
        alt=""
        className={stars.two}
        id="two-star"
        onClick={() => selectStarRating(2)}
      />

      <img
        src={starLogo}
        alt=""
        className={stars.three}
        id="three-star"
        onClick={() => selectStarRating(3)}
      />

      <img
        src={starLogo}
        alt=""
        className={stars.four}
        id="four-star"
        onClick={() => selectStarRating(4)}
      />

      <img
        src={starLogo}
        alt=""
        className={stars.five}
        id="five-star"
        onClick={() => selectStarRating(5)}
      />
    </div>
  );
}

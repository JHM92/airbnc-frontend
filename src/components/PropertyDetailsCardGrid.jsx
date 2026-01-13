import DetailCard from "./DetailCard";
import ImageCard from "./ImageCard";

export default function PropertyDetailsCardGrid({
  price,
  rating,
  favouriteCount,
  images,
  isLoading,
}) {
  if (!isLoading)
    return (
      <div className="view-single-property-detail-card-container">
        <div className="detail-card-row">
          {typeof price !== "undefined" && (
            <DetailCard label="Per Night" emphasis={`£${price}`} labelAlignment="bottom" />
          )}
          {typeof images !== "undefined" && <ImageCard imageUrl={images[1]} />}

          {typeof favouriteCount !== "undefined" && (
            <DetailCard
              label="Favourited@@@Times"
              emphasis={favouriteCount}
              labelAlignment="split"
            />
          )}
        </div>
        <div className="detail-card-row">
          {typeof images !== "undefined" && <ImageCard imageUrl={images[2]} />}
          {typeof rating !== "undefined" && (
            <DetailCard
              label="Rating"
              emphasis={rating === "No Ratings" ? rating : rating.toFixed(2) + " / 5"}
            />
          )}
          {typeof images !== "undefined" && <ImageCard imageUrl={images[3]} />}
        </div>
      </div>
    );
}

import HostedBy from "./HostedBy";
import PropertyDetailsCardGrid from "./PropertyDetailsCardGrid";
import starIcon from "../assets/star.png";
import { useState } from "react";
import { addToFavourites, deleteFromFavourites } from "../../api";

export default function PropertyDetails({ property, reviews, user }) {
  const [isFavourited, setIsFavourited] = useState(property.favourited);
  const initialFavouritedStyling = () => {
    if (isFavourited) {
      return "star-filled favourite";
    } else return "star favourite";
  };

  const handleFavouritedButtonClicked = async () => {
    const favouritedIcon = document.getElementsByClassName("favourite")[0];
    setIsFavourited(!isFavourited);
    if (isFavourited) {
      favouritedIcon.className = "star favourite";
      const res = await deleteFromFavourites(user.user_id, property.property_id);
    } else {
      favouritedIcon.className = "star-filled favourite";
      const res = await addToFavourites(user.user_id, property.property_id);
    }
  };

  return (
    <div className="view-single-property-grid">
      <img src={property?.images[0]} className="view-single-property-main-image" />

      <div className="view-single-property-header">
        <div className="view-single-property-name-location-wrapper">
          <div className="view-single-property-name-favourite-wrapper">
            <h1 className="view-single-property-name">{property?.property_name}</h1>
            <img
              className={initialFavouritedStyling()}
              height="25"
              width="25"
              src={starIcon}
              alt=""
              onClick={handleFavouritedButtonClicked}
            />
          </div>

          <span className="view-single-property-location">{property?.location}</span>
        </div>
        <HostedBy
          hostName={property?.host}
          hostAvatar={property?.host_avatar}
          host_id={property?.host_id}
        />
      </div>
      <div className="view-single-property-description">
        <hr /> {property?.description}
      </div>
      <PropertyDetailsCardGrid
        price={property?.price_per_night}
        rating={reviews?.average_rating}
        favouriteCount={property?.favourite_count}
        images={property?.images}
      />
    </div>
  );
}

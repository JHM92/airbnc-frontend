import axios from "axios";

export const getProperties = async (optionalQuery) => {
  const {
    data: { properties },
  } = await axios.get(`https://airbnc-cm8h.onrender.com/api/properties/${optionalQuery}`);
  console.log(properties);
  return properties;
};

export const getPropertyById = async (property_id) => {
  const {
    data: { property },
  } = await axios.get(`https://airbnc-cm8h.onrender.com/api/properties/${property_id}`);
  return property;
};

export const getReviewsById = async (property_id) => {
  const { data: reviewsData } = await axios.get(
    `https://airbnc-cm8h.onrender.com/api/properties/${property_id}/reviews`
  );
  return reviewsData;
};

export const getPropertiesByHostId = async (host_id) => {
  const { data: properties } = await axios.get(
    `https://airbnc-cm8h.onrender.com/api/properties?host=${host_id}`
  );
  return properties;
};

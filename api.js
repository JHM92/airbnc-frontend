import axios from "axios";

export const getProperties = async (optionalQuery) => {
  const {
    data: { properties },
  } = await axios.get(`https://airbnc-cm8h.onrender.com/api/properties/${optionalQuery}`);

  return properties;
};

export const getPropertyById = async (property_id, user_id) => {
  let optionalQuery = "";

  if (user_id > 0) {
    optionalQuery = `?user_id=${user_id}`;
  }

  const {
    data: { property },
  } = await axios.get(
    `https://airbnc-cm8h.onrender.com/api/properties/${property_id}/${optionalQuery}`,
  );
  return property;
};

export const getReviewsById = async (property_id) => {
  const { data: reviewsData } = await axios.get(
    `https://airbnc-cm8h.onrender.com/api/properties/${property_id}/reviews`,
  );
  return reviewsData;
};

export const getPropertiesByHostId = async (host_id) => {
  const { data: properties } = await axios.get(
    `https://airbnc-cm8h.onrender.com/api/properties?host=${host_id}`,
  );
  return properties;
};

export const getUserById = async (user_id) => {
  const { data } = await axios.get(`https://airbnc-cm8h.onrender.com/api/users/${user_id}`);

  return data;
};

export const postPropertyReview = async (guest_id, rating, comment, property_id) => {
  const payload = {
    guest_id: guest_id,
    rating: rating,
    comment: comment,
  };

  const res = await axios.post(
    `https://airbnc-cm8h.onrender.com/api/properties/${property_id}/reviews`,
    payload,
  );

  return res;
};

export const deleteReviewById = async (review_id) => {
  const res = await axios.delete(`https://airbnc-cm8h.onrender.com/api/reviews/${review_id}`);
  return res;
};

export const patchUserDetails = async (user_id, details) => {
  const res = await axios.patch(`https://airbnc-cm8h.onrender.com/api/users/${user_id}`, details);
  return res;
};

export const getFavouritedProperties = async (user_id) => {
  const favouritedProperties = await getProperties("").then((properties) => {
    return Promise.all(
      properties.map(async (p) => {
        return await axios
          .get(
            `https://airbnc-cm8h.onrender.com/api/properties/${p.property_id}?user_id=${user_id}`,
          )
          .then(({ data: { property } }) => {
            if (property.favourited) {
              return Promise.resolve(property);
            }
            return;
          });
      }),
    )
      .then((values) => {
        return values.filter((value) => {
          return typeof value !== "undefined";
        });
      })
      .then((values) => {
        return values;
      });
  });

  return favouritedProperties;
};

export const addToFavourites = async (user_id, property_id) => {
  const payload = { guest_id: user_id };
  const res = await axios.post(
    `https://airbnc-cm8h.onrender.com/api/properties/${property_id}/favourite`,
    payload,
  );

  return res;
};

export const deleteFromFavourites = async (user_id, property_id) => {
  const res = await axios.delete(
    `https://airbnc-cm8h.onrender.com/api/properties/${property_id}/users/${user_id}/favourite`,
  );
  return res;
};

import axios from "axios";

export const getProperties = async () => {
  const {
    data: { properties },
  } = await axios.get("https://airbnc-cm8h.onrender.com/api/properties/");
  return properties;
};

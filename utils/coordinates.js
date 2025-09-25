const axios = require("axios");

async function getCoordinates(location) {
  try {
    const url = "https://nominatim.openstreetmap.org/search";
    const response = await axios.get(url, {
      params: {
        q: location,
        format: "json",
        limit: 1,
      },
      headers: { "User-Agent": "wanderlust-app" } // required by Nominatim
    });

    if (response.data && response.data.length > 0) {
      const { lon, lat } = response.data[0];
      return [parseFloat(lon), parseFloat(lat)]; // GeoJSON expects [lon, lat]
    } else {
      console.log("Nominatim returned no results for:", location);
      return null;
    }
  } catch (err) {
    console.error("Error fetching coordinates from Nominatim:", err.message);
    return null;
  }
}

module.exports = getCoordinates;
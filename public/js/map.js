mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: 'map',
  style: "mapbox://styles/mapbox/streets-v12",
  center: listing.geometry.coordinates,
  zoom: 9,
});

console.log("Coordinates:", listing.geometry.coordinates);

const popup = new mapboxgl.Popup({ offset: 25 })
  .setHTML(`<h4>${listing.title}</h4><p>Exact location will be provided after booking</p>`);

const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(popup)
  .addTo(map);




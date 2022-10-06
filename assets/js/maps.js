// initFocus is used to focus the map on one location we have choosen ozbekistan because it is pretty center point
let initFocus = {
    "lat": 24.8607,
    "long": 67.0011
};
let initZoom = 4;       // defines the inital zoom level

// intiailizing map object using Leaflet object L
let map = L.map("map").setView([initFocus.lat, initFocus.long], initZoom);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    minZoom: 2,
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
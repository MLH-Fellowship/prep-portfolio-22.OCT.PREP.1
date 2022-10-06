// initFocus is used to focus the map on one location we have choosen ozbekistan because it is pretty center point
let initFocus = {
    "latitude": 24.8607,
    "longitude": 67.0011
};
let initZoom = 4;       // defines the inital zoom level

// intiailizing map object using Leaflet object L
let map = L.map("map").setView([initFocus.latitude, initFocus.longitude], initZoom);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    minZoom: 2,
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const fellows = [
    // fellows details to be added by Swati
];

let popup;
let icon;
let marker;

for (let i = 0; i < fellows.length; i++) {
    icon = L.icon({
        iconUrl: './assets/img/marker.png',
        className: 'pinMarker',
        iconSize:     [56, 26],         // size of the icon
        iconAnchor:   [28, 26],         // point of the icon which will correspond to marker's location
        popupAnchor:  [0, -26]          // point from which the popup should open relatitudeive to the iconAnchor
    });
    popup = `<div class="mappopupwrapper" style="display:flex;flex-direction: row-reverse; align-items: center;">
            <div class="mappopupdescription">
            <div class="mappopupname" style="font-weight: 700;">${fellows[i].name} (${fellows[i].role})</div>
            <div class="mappopupaddress">${fellows[i].location}</div>
            <div class="mappopupsocials" style="margin-top: 5px;">
                <a href="${fellows[i].linkedin}" target= "_blank"<i class="fa-brands fa-linkedin"></i></a>
                <a href="${fellows[i].github}" target= "_blank"<i class="fa-brands fa-github" style="color: black; margin-left: 5px;"></i></a>
            </div>
            </div>
            <div class="mappopupimage"><img height="50px" width="50px" src="./assets/img/fellows/${fellows[i].img}" style="border-radius: 7px; border: 2px solid black; margin-right: 10px;"/></div>
        </div>`

    marker = L.marker([fellows[i].latitude, fellows[i].longitude], {icon: icon}).addTo(map);
    marker.bindPopup(popup);
}

function median(Fellows) {
    let latitude = 0.0, longitude = 0.0
    for (let i = 0; i < Fellows.length; i++) {
        latitude += Fellows[i].latitude;
        longitude += Fellows[i].longitude;
    }
    latitude /= Fellows.length;
    longitude /= Fellows.length;
    return [latitude, longitude];
}

let medianLoc = median(fellows);
let mlh_marker = L.icon({
    iconUrl: './assets/img/mlh.jpg',
    className: 'mlhMarker',
    iconSize:     [30, 30],         // size of the icon
    iconAnchor:   [15, 15],         // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -15]          // point from which the popup should open relatitudeive to the iconAnchor
});
popup = `<div class="container">
            <h6 style='display:inline'><b>MLH</b><h7 style='display:inline'>, An ideal place to start your hacking journey!</h7></h6>
            <hr/><b>MLH</b>
            </div>`;
marker = L.marker([medianLoc[0], medianLoc[1]], {icon: mlh_marker}).addTo(map);
marker.bindPopup(popup);


        


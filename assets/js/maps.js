---
---

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

// defining our own markers and its shadow
let pin = L.icon({
    iconUrl: './assets/img/marker.png',
    shadowUrl: './assets/img/marker-shadow.png',
    className: 'pinMarker',

    iconSize:     [56, 26],         // size of the icon
    shadowSize:   [65.28, 19.64],   // size of the shadow
    iconAnchor:   [28, 26],         // point of the icon which will correspond to marker's location
    shadowAnchor: [8, 19.64],       // the same for the shadow
    popupAnchor:  [0, -26]          // point from which the popup should open relative to the iconAnchor
});

let mlh_marker = L.icon({
    iconUrl: './assets/img/mlh.jpg',
    className: 'mlhMarker',

    iconSize:     [30, 30],         // size of the icon
    iconAnchor:   [15, 15],         // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -15]          // point from which the popup should open relative to the iconAnchor
});

// it is defined outside the block to avoid re-defintion error
let sumLat = 0;
let sumLong = 0;
let nFellows = 0;

// using liquid to generate the number of markers based on the number of data in _data/fellows.yml
{% for item in site.data.fellows %}
    sumLat += parseFloat('{{item.latitude}}');
    sumLong += parseFloat('{{item.longitude}}');
    nFellows++;
{% endfor %}

let marker = L.marker([sumLat/nFellows, sumLong/nFellows], {icon: mlh_marker}).addTo(map);
marker.bindPopup('<div class="container"><h6 style="display:inline"><b>MLH</b><h7 style="display:inline">, An ideal place to start your hacking journey!</h7></h6><hr/><b>MLH</b></div>');

// using liquid to generate the number of markers based on the number of data in _data/fellows.yml
{% for item in site.data.fellows %}
    marker = L.marker(['{{item.latitude}}', '{{item.longitude}}'], {icon: pin}).addTo(map);
    marker.bindPopup(
        '<div class="map__popup__wrapper" style="display:flex;flex-direction: row-reverse; align-items: center;">'+
            '<div class="map__popup__description">'+
                '<div class="map__popup__name" style="font-weight: 700;">{{item.name}} ({{item.role}})</div>'+
                '<div class="map__popup__address">{{item.location}}</div>'+
                '<div class="map__popup__socials" style="margin-top: 5px;">'+
                    '<a href="https://linkedin.com/in/{{item.linkedin}}"><i class="fa-brands fa-linkedin"></i></a>'+
                    '<a href="https://github.com/{{item.github}}"><i class="fa-brands fa-github" style="color: black; margin-left: 5px;"></i></a>'+
                '</div>'+
            '</div>'+
            '<div class="map__popup__image"><img height="50px" width="50px" src="./assets/img/fellows/{{item.img}}" style="border-radius: 7px; border: 2px solid black; margin-right: 10px;"/></div>'+
        '</div>'
        );
{% endfor %}
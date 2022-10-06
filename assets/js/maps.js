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
    {
        lat: 17.686815,
        long: 83.218483,
        pic: 'divya.jpg',
        name: 'Divya Sri Darimisetti',
        location: 'Visakhapatnam, India',
        github: 'https://github.com/irsayvid',
        linkedin: 'https://www.linkedin.com/in/divya-sri-darimisetti',
        role: 'Fellow',
    },
    {
        lat: 25.204849,
        long: 55.270782,
        pic: 'moses.jpg',
        name: 'Moses Varghese',
        location: 'Dubai, UAE',
        github: 'https://github.com/amv2',
        linkedin: 'https://linkedin.com/in/amv2',
        role: 'Fellow',
    },
    {
        lat: 19.075983,
        long: 72.877655,
        pic: 'siddhi.jpg',
        name: 'Siddhi Bhanushali',
        location: 'Mumbai, India',
        github: 'https://github.com/siddhi-244',
        linkedin: ' https://www.linkedin.com/in/siddhi-bhanushali',
        role: 'Fellow',
    },
    {
        lat: 29.288670,
        long: 76.039848,
        pic: 'lavisha.jpg',
        name: 'Lavisha Bhambri',
        location: 'Haryana, India',
        github: 'https://github.com/lavishabhambri',
        linkedin: 'https://www.linkedin.com/in/lavisha-bhambri-630384196/',
        role: 'Fellow',
    },
    {
        lat: 19.306801,
        long: 84.794868,
        pic: 'swati.jpg',
        name: 'Swatishree Mahapatra',
        location: 'Berhampur, Odisha',
        github: 'https://github.com/Swatishree-Mahapatra',
        linkedin: 'https://www.linkedin.com/in/swatishree-mahapatra-a2251620a',
        role: 'Fellow',
    },
 {
      lat: 19.075983,
        long: 72.877655,
        pic: 'bhavneet.jpg',
        name: 'Bhavneet Kaur',
        location: 'Mumbai, India',
        github: 'https://github.com/Swatishree-Mahapatra',
        linkedin: 'https://www.linkedin.com/in/swatishree-mahapatra-a2251620a',
        role: 'Fellow',
    },
    {
        lat: 19.075983,
        long: 73.018997,
        pic: 'kanchi.jpg',
        name: 'Kanchi Tank',
        location: 'Navi Mumbai, India',
        github: 'https://github.com/kanchitank',
        linkedin: 'https://www.linkedin.com/in/kanchitank',
        role: 'Fellow',
    },
    {
        lat: 28.535517,
        long: 77.391029,
        pic: 'akanksha.jpg',
        name: 'Akanksha Kushwaha',
        location: 'Noida, India',
        github: 'https://github.com/aku1310',
        linkedin: 'https://www.linkedin.com/in/akankshakushwaha/',
        role: 'Fellow',
    },
 {
        lat: 26.5455,
        long: 87.8942,
        pic: 'niyoj.png',
        name: ' Niyoj Oli',
        location: 'Jhapa, Nepal',
        github: ' https://github.com/niyoj',
        linkedin: ' https://linkedin.com/in/niyoj',
        role: 'Fellow',
    },
 {
        lat: 28.5355,
        long: 77.3910,
        pic: 'neelaksh.jpg',
        name: 'Neelaksh Singh',
        location: 'Noida, India',
        github: 'https://github.com/Neelaksh-Singh',
        linkedin: ' https://www.linkedin.com/in/neelaksh-singh/',
        role: 'Fellow',
    },
 {
        lat: 19.0760,
        long: 72.8777,
        pic: 'devansu.jpg',
        name: 'Devansu Yadav',
        location: 'Mumbai, India',
        github: 'https://www.github.com/Devansu-Yadav',
        linkedin: 'https://www.linkedin.com/in/devansu-yadav/',
        role: 'Fellow',
    },
 {
        lat: 22.5726,
        long: 88.3639,
        pic: 'depayan.jpg',
        name: 'Deepayan Mukherjee',
        location: 'Kolkata, India',
        github: ' https://github.com/Ciggzy1312',
        linkedin: 'https://www.linkedin.com/in/deepayan-mukherjee-a7ba821ab/',
        role: 'Fellow',
    },
 {
        lat: 28.6139,
        long: 77.2090,
        pic: 'gaurav.jpg',
        name: 'Gaurav Gulati',
        location: 'New Delhi, India',
        github: 'https://github.com/gauravgulati15',
        linkedin: 'https://www.linkedin.com/in/gaurav-gulati-633b201bb/',
        role: 'Fellow',
    },
 {
        lat: 19.306801,
        long: 55.794868,
        pic: 'mlh.png',
        name: 'Riffat Khan',
        location: 'Dubai, UAE',
        github: 'https://www.github.com/',
        linkedin: 'https://www.linkedin.com',
        role: 'Fellow',
    },
 {
        lat: 20.306801,
        long: 81.794868,
        pic: 'mlh.png',
        name: 'Sudhanshu Kumar',
        location: 'Odisha',
        github: 'https://www.github.com/',
        linkedin: 'https://www.linkedin.com',
        role: 'Fellow',
    },
//Todo: Add Akshita's details
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
            <div class="mappopupimage"><img height="50px" width="50px" src="./assets/img/fellows/${fellows[i].pic}" style="border-radius: 7px; border: 2px solid black; margin-right: 10px;"/></div>
        </div>`

    marker = L.marker([fellows[i].lat, fellows[i].long], {icon: icon}).addTo(map);
    marker.bindPopup(popup);
}

function median(Fellows) {
    let latitude = 0.0, longitude = 0.0
    for (let i = 0; i < Fellows.length; i++) {
        latitude += Fellows[i].lat;
        longitude += Fellows[i].long;
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


        


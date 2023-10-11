var schoolLocations = [
    {name: 'Bordeaux', coordinates: [44.8745683, -0.5782448]},
    {name: 'Paris', coordinates: [48.8662480, 2.3735367]},
    {name: 'Nantes', coordinates: [47.2105803, -1.5668400]},
    {name: 'Toulouse', coordinates: [43.6123646, 1.4290608]},
    {name: 'Lyon', coordinates: [45.7645793, 4.8327181]},
    // add more locations...
];

var myIcon = L.icon({
    iconUrl: 'epitech_logo_2.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
});

var map = L.map('map').setView([47.1590767, 2.4324018], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
}).addTo(map);

schoolLocations.forEach(schoolLocation => {
    L.marker(schoolLocation.coordinates, {icon: myIcon})
        .bindPopup(`${schoolLocation.name} rocks!`)
        .addTo(map);
});

//if you zoom on the address, you will see it matches perfectly, sincerely AKANE
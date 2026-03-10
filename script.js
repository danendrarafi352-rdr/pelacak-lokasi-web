function getLocation() {

if (navigator.geolocation) {

navigator.geolocation.getCurrentPosition(showPosition);

} else {

document.getElementById("hasil").innerHTML = "Browser tidak mendukung GPS";

}

}

function showPosition(position) {

let lat = position.coords.latitude;
let lon = position.coords.longitude;

let link = "https://www.google.com/maps?q=" + lat + "," + lon;

document.getElementById("hasil").innerHTML =
"<p>Latitude: " + lat + "</p>" +
"<p>Longitude: " + lon + "</p>" +
"<a href='"+link+"' target='_blank'>Buka di Google Maps</a>";

}
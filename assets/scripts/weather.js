const apikey = 'b47e4bef422b5d1e5461fd569b1c8ed3';
var lat = '';
var long = '';


async function getWeather(){
    getLocation();
    let url = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+long+'&appid='+apikey;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
}

function getLocation(){
    lat = '40.273190';
    long = '-76.886703';
}

//when the page loads get the weather
window.onload = getWeather();
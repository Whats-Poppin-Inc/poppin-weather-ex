const apikey = 'b47e4bef422b5d1e5461fd569b1c8ed3';
var lat = '';
var long = '';


async function getWeather(){
    getLocation();
    let url = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+long+'&units=metric&appid='+apikey;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    document.getElementById('temp').innerHTML = data.current.temp + '&deg;C';
}

function getLocation(){
    lat = document.getElementById('lat').value;
    long = document.getElementById('long').value;
}




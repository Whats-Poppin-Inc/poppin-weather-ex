var apikey = '';
var lat = '';
var long = '';

$.getJSON("env.json", function(json) {
    apikey = json.API_KEY; 
 });
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




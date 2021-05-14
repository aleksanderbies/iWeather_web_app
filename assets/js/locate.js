const locationCity =  document.getElementById("cityName");
const temperatureValue =  document.getElementById("tempValue");
const iconBox = document.getElementById("showIcon");
const feelTemp = document.getElementById("feelTempValue");
const minTemp = document.getElementById("minTempValue");
const maxTemp = document.getElementById("maxTempValue");
const pressureValue = document.getElementById("pressValue");
const humidityValue = document.getElementById("humidityValue");
const windValue = document.getElementById("windValue");
const description = document.getElementById("descriptionW");

var latitude;
var longitude;

var APIkey = 'f6785dbf88aab1a3ecaba3da1633ee5f';

let country_code = geoplugin_countryCode();

console.log(country_code);
fetch(`https://restcountries.eu/rest/v2/alpha/${country_code}`)
    .then(response => response.json())
    .then(dataCountry =>{
        var capital = dataCountry['capital'];
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${APIkey}`)
        .then(response => response.json())
        .then(data => {
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var iconCode = data['weather'][0]['icon'];
            var weatherDescription = data['weather'][0]['description'];
            var humidity = data['main']['humidity'];
            var pressure = data['main']['pressure']
            var feels = data['main']['feels_like'];
            var tempMax = data['main']['temp_max'];
            var tempMin = data['main']['temp_min'];
            var wind = data['wind']['speed'];
                
            locationCity.innerHTML = nameValue;
            iconBox.innerHTML = `<img src="http://openweathermap.org/img/wn/${iconCode}@2x.png" width="120px" />`;
            temperatureValue.innerHTML = parseInt(tempValue) + ` °<span>C</span>`;
            minTemp.innerHTML = parseInt(tempMin) + ` °<span>C</span>`;
            maxTemp.innerHTML = parseInt(tempMax) + ` °<span>C</span>`;
            feelTemp.innerHTML = parseInt(feels) + ` °<span>C</span>`;
            pressureValue.innerHTML = parseInt(pressure) + `<span> hPa</span>`;
            humidityValue.innerHTML = parseInt(humidity) + `<span> %</span>`;
            windValue.innerHTML = parseInt(wind) + `<span> km/h</span>`;
            description.innerHTML = weatherDescription;
        });
    });




navigator.geolocation.getCurrentPosition(function (position){
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${APIkey}`)
        .then(response => response.json())
        .then(data => {

            console.log(data)
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var iconCode = data['weather'][0]['icon'];
            var weatherDescription = data['weather'][0]['description'];
            var humidity = data['main']['humidity'];
            var pressure = data['main']['pressure']
            var feels = data['main']['feels_like'];
            var tempMax = data['main']['temp_max'];
            var tempMin = data['main']['temp_min'];
            var wind = data['wind']['speed'];
            
            console.log(wind);
            locationCity.innerHTML = nameValue;
            iconBox.innerHTML = `<img src="http://openweathermap.org/img/wn/${iconCode}@2x.png" width="120px" />`;
            temperatureValue.innerHTML = parseInt(tempValue) + ` °<span>C</span>`;
            minTemp.innerHTML = parseInt(tempMin) + ` °<span>C</span>`;
            maxTemp.innerHTML = parseInt(tempMax) + ` °<span>C</span>`;
            feelTemp.innerHTML = parseInt(feels) + ` °<span>C</span>`;
            pressureValue.innerHTML = parseInt(pressure) + `<span> hPa</span>`;
            humidityValue.innerHTML = parseInt(humidity) + `<span> %</span>`;
            windValue.innerHTML = parseInt(wind) + `<span> km/h</span>`;
            description.innerHTML = weatherDescription;
        });
});
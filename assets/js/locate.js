const locationCity =  document.getElementById("cityName");
const temperatureValue =  document.getElementById("tempValue");
//const  =  document.querySelector(".temperature_value");

var latitude, longitude;

var APIkey = 'f6785dbf88aab1a3ecaba3da1633ee5f';

navigator.geolocation.getCurrentPosition(function (position){
    console.log(position);
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${APIkey}`)
        .then(response => response.json())
        .then(data => {

            console.log(data)
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var descValue = data['weather'][0]['description'];
            
            console.log(nameValue);
            locationCity.innerHTML = nameValue;
            temperatureValue.innerHTML = tempValue + `°<span>C</span>`;
            //temperature.innerHTML = tempValue;
        });
});
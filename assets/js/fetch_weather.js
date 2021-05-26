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
const loader = document.querySelector(".loader");

var searchWeatcher = document.getElementById("searchWeather");
var eightDayForecast = document.getElementById("search8days");

var APIkey = 'f6785dbf88aab1a3ecaba3da1633ee5f';

searchWeatcher.addEventListener('click', function(){

        loader.style.display = "flex";
        setTimeout(function(){
        $(loader).fadeOut("slow");
        }, 2000);

        var cityName =  document.querySelector(".inputValue").value;

        document.querySelector(".weatherLoc").style.visibility= "visible";
        document.querySelector(".report").style.visibility= "visible";

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${APIkey}`)
            .then(response => response.json())
            .then(data => {

                var cityid = data['id'];
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

                document.getElementById('fav').setAttribute("name",`${cityid}`);
                document.getElementById('notfav').setAttribute("name",`${cityid}`);

                document.querySelector(".inputValue").value = "";
                auth.onAuthStateChanged(firebaseUser => {
                    if(firebaseUser){
                        firebase.database().ref(`${firebaseUser.uid}`).once('value', function(snapshot){
                            if (snapshot.hasChild("favourites")){
                                console.log("true");
                                firebase.database().ref(`${firebaseUser.uid}/favourites`).once('value', function(snapshot){
        
                                    let cities = snapshot.val();
                                    let x = Object.keys(cities);
                                    
                                    let n = x.includes(`${cityid}`);
        
                                    if(n){
                                        document.getElementById("fav").style.display="block";
                                        document.getElementById("notfav").style.display="none";
                                    }else{
                                        document.getElementById("fav").style.display="none";
                                        document.getElementById("notfav").style.display="block";
                                    }
                                });
                            }else{
                                document.getElementById("fav").style.display="none";
                                document.getElementById("notfav").style.display="block";
                            }
                        });
                    }
                });
            })
        .catch(err => alert("Wrong city name!"))
    });
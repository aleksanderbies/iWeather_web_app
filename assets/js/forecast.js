const locationCity =  document.getElementById("cityName");
const temperatureValue =  document.getElementById("tempValue");
const iconBox = document.getElementById("showIcon");
const feelTemp = document.getElementById("feelTempValue");
const description = document.getElementById("descriptionW");

const date0 = document.getElementById("date0");
const date1 = document.getElementById("date1");
const date2 = document.getElementById("date2");
const date3 = document.getElementById("date3");
const date4 = document.getElementById("date4");
const date5 = document.getElementById("date5");
const date6 = document.getElementById("date6");

const icond0 = document.getElementById("icond0");
const icond1 = document.getElementById("icond1");
const icond2 = document.getElementById("icond2");
const icond3 = document.getElementById("icond3");
const icond4 = document.getElementById("icond4");
const icond5 = document.getElementById("icond5");
const icond6 = document.getElementById("icond6");

const day0TempValue = document.getElementById("day0TempValue");
const day1TempValue = document.getElementById("day1TempValue");
const day2TempValue = document.getElementById("day2TempValue");
const day3TempValue = document.getElementById("day3TempValue");
const day4TempValue = document.getElementById("day4TempValue");
const day5TempValue = document.getElementById("day5TempValue");
const day6TempValue = document.getElementById("day6TempValue");

var searchWeatcher = document.getElementById("searchWeather");
var eightDayForecast = document.getElementById("search8days");

const loader = document.querySelector(".loader");

var APIkey = 'f6785dbf88aab1a3ecaba3da1633ee5f';

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

eightDayForecast.addEventListener('click', function(){

    loader.style.display = "flex";
    setTimeout(function(){
    $(loader).fadeOut("slow");
    }, 2000);

    var cityName =  document.querySelector(".inputValue").value;
    
    document.querySelector(".weatherLoc").style.visibility= "visible";
    document.querySelector(".report").style.visibility= "visible";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${APIkey}`)
        .then(response => response.json())
        .then(data => {var nameValue = data['name'];
            var cityid = data['id'];
            var tempValue = data['main']['temp'];
            var iconCode = data['weather'][0]['icon'];
            var weatherDescription = data['weather'][0]['description'];
            var latitude = data['coord']['lat'];
            var longitude = data['coord']['lon'];
            
            locationCity.innerHTML = nameValue;
            iconBox.innerHTML = `<img src="http://openweathermap.org/img/wn/${iconCode}@2x.png" width="120px" />`;
            temperatureValue.innerHTML = parseInt(tempValue) + ` °<span>C</span>`;
            description.innerHTML = weatherDescription;

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely,current&units=metric&appid=${APIkey}`)
            .then(response => response.json())
            .then(data8 => {console.log(data8)
                
                var d1 = data8['daily'][1]['dt'];
                var d2 = data8['daily'][2]['dt'];
                var d3 = data8['daily'][3]['dt'];
                var d4 = data8['daily'][4]['dt'];
                var d5 = data8['daily'][5]['dt'];
                var d6 = data8['daily'][6]['dt'];
                var d7 = data8['daily'][7]['dt']; 

                var i1 = data8['daily'][1]['weather'][0]['icon'];
                var i2 = data8['daily'][2]['weather'][0]['icon'];
                var i3 = data8['daily'][3]['weather'][0]['icon'];
                var i4 = data8['daily'][4]['weather'][0]['icon'];
                var i5 = data8['daily'][5]['weather'][0]['icon'];
                var i6 = data8['daily'][6]['weather'][0]['icon'];
                var i7 = data8['daily'][7]['weather'][0]['icon'];

                var t1 = parseInt(data8['daily'][1]['temp']['day']);
                var t2 = parseInt(data8['daily'][2]['temp']['day']);
                var t3 = parseInt(data8['daily'][3]['temp']['day']);
                var t4 = parseInt(data8['daily'][4]['temp']['day']);
                var t5 = parseInt(data8['daily'][5]['temp']['day']);
                var t6 = parseInt(data8['daily'][6]['temp']['day']);
                var t7 = parseInt(data8['daily'][7]['temp']['day']);

                var day0date = `${new Date(d1 * 1000).getDate()} ${monthNames[new Date(d1 * 1000).getMonth()]}`;
                var day1date = `${new Date(d2 * 1000).getDate()} ${monthNames[new Date(d2 * 1000).getMonth()]}`;
                var day2date = `${new Date(d3 * 1000).getDate()} ${monthNames[new Date(d3 * 1000).getMonth()]}`;
                var day3date = `${new Date(d4 * 1000).getDate()} ${monthNames[new Date(d4 * 1000).getMonth()]}`;
                var day4date = `${new Date(d5 * 1000).getDate()} ${monthNames[new Date(d5 * 1000).getMonth()]}`;
                var day5date = `${new Date(d6 * 1000).getDate()} ${monthNames[new Date(d6 * 1000).getMonth()]}`;
                var day6date = `${new Date(d7 * 1000).getDate()} ${monthNames[new Date(d7 * 1000).getMonth()]}`;

                date0.innerHTML = day0date;
                date1.innerHTML = day1date;
                date2.innerHTML = day2date;
                date3.innerHTML = day3date;
                date4.innerHTML = day4date;
                date5.innerHTML = day5date;
                date6.innerHTML = day6date;

                icond0.innerHTML = `<img src="http://openweathermap.org/img/wn/${i1}@2x.png"/>`;
                icond1.innerHTML = `<img src="http://openweathermap.org/img/wn/${i2}@2x.png"/>`;
                icond2.innerHTML = `<img src="http://openweathermap.org/img/wn/${i3}@2x.png"/>`;
                icond3.innerHTML = `<img src="http://openweathermap.org/img/wn/${i4}@2x.png"/>`;
                icond4.innerHTML = `<img src="http://openweathermap.org/img/wn/${i5}@2x.png"/>`;
                icond5.innerHTML = `<img src="http://openweathermap.org/img/wn/${i6}@2x.png"/>`;
                icond6.innerHTML = `<img src="http://openweathermap.org/img/wn/${i7}@2x.png"/>`;

                day0TempValue.innerHTML = t1 + " °<span>C</span>";
                day1TempValue.innerHTML = t2 + " °<span>C</span>";
                day2TempValue.innerHTML = t3 + " °<span>C</span>";
                day3TempValue.innerHTML = t4 + " °<span>C</span>";
                day4TempValue.innerHTML = t5 + " °<span>C</span>";
                day5TempValue.innerHTML = t6 + " °<span>C</span>";
                day6TempValue.innerHTML = t7 + " °<span>C</span>"; 
                
                document.querySelector(".inputValue").value = "";
                
                document.getElementById('fav').setAttribute("name",`${cityid}`);
                document.getElementById('notfav').setAttribute("name",`${cityid}`);
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
            });
        })
    .catch(err => alert("Wrong city name!"))
    

});
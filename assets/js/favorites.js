var reportDiv = document.getElementById("report");
var APIkey = 'f6785dbf88aab1a3ecaba3da1633ee5f';
auth.onAuthStateChanged(firebaseUser => {
    if(firebaseUser){

        firebase.database().ref(`${firebaseUser.uid}/favourites`).once('value', function(snapshot){

            let cities = snapshot.val();
            let x = Object.keys(cities);

            for (let i = 0; i<x.length; i++){
                fetch(`https://api.openweathermap.org/data/2.5/weather?id=${x[i]}&units=metric&appid=${APIkey}`)
                    .then(response => response.json())
                    .then(data => {
                        var nameValue = data['name'];
                        var tempValue = parseInt(data['main']['temp']);
                        var iconCode = data['weather'][0]['icon'];
                        var humidity = data['main']['humidity'];
                        var pressure = data['main']['pressure']
                        var feels = parseInt(data['main']['feels_like']);
                        var tempMax = parseInt(data['main']['temp_max']);
                        var tempMin = parseInt(data['main']['temp_min']);
                        var wind = parseInt(data['wind']['speed']);
                        
                        reportDiv.innerHTML += `
                        <div class="city">
                            <div class="cityName" id="city${i}">${nameValue}</div>
                                <div class="ic0N" id="icond0"><img src="http://openweathermap.org/img/wn/${iconCode}@2x.png" /></div>
                                <div class="value"><p id="city${i}TempValue">${tempValue} °<span>C</span></p></div>
                                <div class="details">
                                    <div class="weatherDetails">
                                        <div class="detailsTitle">Feel</div>
                                        <div class="detailsValue"><p id="city${i}FeelTempValue">${feels}°<span>C</span></p></div>
                                    </div>
                                    <div class="weatherDetails">
                                        <div class="detailsTitle">Min</div>
                                        <div class="detailsValue"><p id="city${i}MinTempValue">${tempMin} °<span>C</span></p></div>
                                    </div>
                                    <div class="weatherDetails">
                                        <div class="detailsTitle">Max</div>
                                        <div class="detailsValue"><p id="city${i}MaxTempValue">${tempMax} °<span>C</span></p></div>
                                    </div>
                                    <div class="weatherDetails">
                                        <div class="detailsTitle">Pressure</div>
                                        <div class="detailsValue"><p id="city${i}PressValue">${pressure} <span>hPa</span></p></div>
                                    </div>
                                    <div class="weatherDetails">
                                        <div class="detailsTitle">Humidity</div>
                                        <div class="detailsValue"><p id="city${i}HumValue">${humidity} <span>%</span></p></div>
                                    </div>
                                    <div class="weatherDetails">
                                        <div class="detailsTitle">Wind</div>
                                        <div class="detailsValue"><p id="city${i}WindValue">${wind} <span>km/h</span></p></div>
                                    </div>
                            </div>
                            <div class="ic0N" id="fav${i}" name="${x[i]}" onclick="deleteFromFav(this);"><i class="material-icons">favorite</i></div>
                        </div>
                        `;
                    });
            };
        });

    }else{
        
    }
});
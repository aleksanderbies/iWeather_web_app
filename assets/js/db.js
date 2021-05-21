function deleteFromFav(item){
    auth.onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
            var cityCode = $(item).attr("name");

            firebase.database().ref(`${firebaseUser.uid}/favourites/${cityCode}`).remove();

            location.reload();
        }
    });
}

function deleteFromDB(item){
    auth.onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
            var cityCode = $(item).attr("name");

            firebase.database().ref(`${firebaseUser.uid}/favourites/${cityCode}`).remove();

            document.getElementById("fav").style.display="none";
            document.getElementById("notfav").style.display="block";
        }
    });
}

function addToFav(item){
    auth.onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
            var cityCode = $(item).attr("name");
            var cityName = document.getElementById("cityName").innerHTML;

            firebase.database().ref(`${firebaseUser.uid}`).once('value', function(snapshot){
                if (snapshot.hasChild("favourites")){
                    firebase.database().ref(`${firebaseUser.uid}/favourites`).once('value', function(snapshot){
                        let cities = snapshot.val();
                        x = Object.keys(cities).length;
                        if(x<5){
                            firebase.database().ref(`${firebaseUser.uid}`).child('favourites').child(`${cityCode}`).update({
                                id: cityCode,
                                name: `${cityName}`
                            });
                            document.getElementById("fav").style.display="block";
                            document.getElementById("notfav").style.display="none";
                        }else{
                            alert("You cannot have more than five favorites cities!");
                        }
                    });
                }else{
                    firebase.database().ref(`${firebaseUser.uid}`).child('favourites').child(`${cityCode}`).update({
                        id: cityCode,
                        name: `${cityName}`
                    });
                    document.getElementById("fav").style.display="block";
                    document.getElementById("notfav").style.display="none";
                }
            });
        }
    });
}

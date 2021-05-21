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
var a = true;
function addToFav(item){
    auth.onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
            
            
            var cityCode = $(item).attr("name");
            var cityName = document.getElementById("cityName").innerHTML;
                    
            firebase.database().ref(`${firebaseUser.uid}`).child('favourites').child(`${cityCode}`).update({
                        id: cityCode,
                        name: `${cityName}`
            });
            document.getElementById("fav").style.display="block";
            document.getElementById("notfav").style.display="none";
            }
        });
}
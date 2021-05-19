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

            firebase.database().ref(`${firebaseUser.uid}/favourites`).once('value', function(snapshot){
                let cities = snapshot.val();
                x = Object.keys(cities).length;
                
                console.log(x);
                
                if(x>=5 && a){
                    if(x==5){
                        
                    }else if(x>=5){
                        alert("You cannot have more than five favorites cities!");
                    }
                    console.log("B");
                    a = false;
                }else if(a){       
                    console.log("A")   
                    firebase.database().ref(`${firebaseUser.uid}/favourites/${cityCode}`).update({
                        id: cityCode,
                        name: `${cityName}`
                    });
                    document.getElementById("fav").style.display="block";
                    document.getElementById("notfav").style.display="none";
                    a = false;
                }else{
                    alert("You cannot have more than five favorites cities!");
                }
            });
        }
    })
}
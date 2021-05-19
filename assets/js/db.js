function deleteFromFav(item){
    auth.onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
            var cityCode = $(item).attr("name");

            firebase.database().ref(`${firebaseUser.uid}/favourites/${cityCode}`).remove();

            location.reload();
        }
    });
}
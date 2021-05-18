var logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener('click', function(){
    auth.signOut();
    document.getElementById("navbar").style.visibility= "visible";
    document.getElementById("logoutBtn").style.visibility= "visible";
    document.getElementById("loginBtn").style.visibility= "hidden";
    window.location.href = "./index.html";
});

auth.onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
        document.getElementById("navbar").style.visibility= "visible";
        document.getElementById("logoutBtn").style.visibility= "visible";
        document.getElementById("loginBtn").style.visibility= "hidden";
    }else{
        document.getElementById("navbar").style.visibility= "hidden";
        document.getElementById("logoutBtn").style.visibility= "hidden";
        document.getElementById("loginBtn").style.visibility= "visible";
    }
});
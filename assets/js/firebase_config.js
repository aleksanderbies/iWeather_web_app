  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA8jrAZWUWoSO2rIISo_YAvzxuGPhuumXk",
    authDomain: "weatherapp-e7e37.firebaseapp.com",
    databaseURL: "https://weatherapp-e7e37-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "weatherapp-e7e37",
    storageBucket: "weatherapp-e7e37.appspot.com",
    messagingSenderId: "829172232407",
    appId: "1:829172232407:web:ca6a16d73d58f5d034c092"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

console.log(auth.currentUser);

async function signIn(){
    var email = document.getElementById("login_email").value;
    var password = document.getElementById("login_passwd").value;

    const promise = await auth.signInWithEmailAndPassword(email, password);
    
    window.location.href = "./index.html";
}

async function signUp(){
    var email = document.getElementById("signup_mail").value;
    var password = document.getElementById("passwd").value;
    var retypedPassword = document.getElementById("confirmPasswd").value;

    if (password.localeCompare(retypedPassword) == 1){
      alert("Please type the same passwords!");
    }else{
    const promise = await auth.createUserWithEmailAndPassword(email, password);
    
    location.reload();
    }
}
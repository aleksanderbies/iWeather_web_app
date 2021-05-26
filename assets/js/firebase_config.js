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

async function signIn(){
    var email = document.getElementById("login_email").value;
    var password = document.getElementById("login_passwd").value;

    try{
      const promise = await auth.signInWithEmailAndPassword(email, password);
      window.location.href = "./index.html";
    }catch (error){
      alert(error.message);
    }
}

async function signUp(){
    var email = document.getElementById("signup_mail").value;
    var password = document.getElementById("passwd").value;
    var retypedPassword = document.getElementById("confirmPasswd").value;

    if (password.localeCompare(retypedPassword) == 1){
      alert("Please type the same passwords!");
    }else{
      try{
          const promise = await auth.createUserWithEmailAndPassword(email, password);
          let uid = promise.user.uid;
          let umail = promise.user.email;

          firebase.database().ref(`${uid}`).set({
            email: `${umail}`,
            uid: `${uid}`
          });

          location.reload();

      }catch (error){
        alert(error.message);
      }
    }
}

function resetPassword(){
  var email = document.getElementById("forgot_email").value;
  if (email != ""){
    auth.sendPasswordResetEmail(email).then(function(){
      alert("Email has been sent to you! Please check and verify.");
      window.location.href = "./signform.html?#";
    })
    .catch(function(error){
      var errorMess = error.message;
      alert(errorMess);
    });
  }else{
    alert("Please type your email!");
  }
}
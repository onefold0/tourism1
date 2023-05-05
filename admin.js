
const loginform = document.getElementById("login-form");
const signupform = document.getElementById("signup-form");

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      change();
      window.location.href="adminpost.html";
      window.alert("Sucsess full Log in");
    } else {
        alart("file is encurepded")
      // No user is signed in.
    }
  });

/*function login(){
    var userEmail = document.getElementById("eimp").value;
    var userPass = document.getElementById("pimp").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}*/
loginform.addEventListener('submit',(e) =>{
  e.preventDefault();
  var userEmail = document.getElementById("eimp").value;
    var userPass = document.getElementById("pimp").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });
});

  // function logout(){
  //   firebase.auth().signOut();
  // }

signupform.addEventListener('submit',(e) =>{
  e.preventDefault();
  var email= document.getElementById("email").value;
  var pass =document.getElementById("password").value;
  var name =document.getElementById("name").value;
  var user = firebase.auth().currentUser;

  alert("Sucsess Full Signup")
  
  firebase.auth().createUserWithEmailAndPassword(email,pass).then(cred => {

  });
  firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    console.log("Error : " + errorMessage);

    // ...
  });
  
});

function change(){
  var user = firebase.auth().currentUser;
  var name = document.getElementById("name").value;

user.updateProfile({
  displayName: name,
  photoURL: "#"
}).then(function() {
  // Update successful.
}).catch(function(error) {
  // An error happened.
});
  }


// The app only has access as defined in the Security Rules
/*var db = firebase.database();
var ref = db.ref("/text");
ref.on("value", function(snapshot) {
  console.log(snapshot.val());
});
// */
var dbref = firebase.database().ref();
var somevalue = "hello"
dbref.child("text").set(somevalue);











// var provider = new firebase.auth.GoogleAuthProvider();

// // Get a reference to the "Connect with Google" button
// var googleConnectBtn = document.getElementById("googlebtn");

// // Handle the button click event
// googleConnectBtn.addEventListener("click", function() {
//   // Sign in the user with Google credentials
//   firebase.auth().signInWithPopup(provider)
//     .then((result) => {
//       // Link the user's Google account to their Firebase account
//       var credential = firebase.auth.GoogleAuthProvider.credential(
//         result.credential.idToken,
//         result.credential.accessToken
//       );
//       var user = firebase.auth().currentUser;
//       user.linkWithCredential(credential)
//         .then(() => {
//           console.log("Google account linked successfully!");
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

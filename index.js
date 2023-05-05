// Your web app's Firebase configuration

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // let rand=Math.ceil(Math.random()*10);
      // User is signed in.
      // window.alert("hi"+" "+user.uid); 
      var userid=user.uid;
      var nam = user.displayName;
      appt(userid, nam);
    } else {
      // No user is signed in.
      /*window.location.replace("http://127.0.0.1:5500/login.html");*/
      // window.location.href = "signUp.html";
      window.location.href = "indexMain.html";

    }
  });

  function logout(){
    firebase.auth().signOut()
  .then(function() {
    // Sign-out successful.
  })
  .catch(function(error) {
    // An error happened
    window.alert("Error:"+error);
  });
  }

  var db = firebase.database();
  var ref = db.ref("/text");
  ref.on("value", function(snapshot) {
    console.log(snapshot.val());
  });


function appt(id,name){
var dbref = firebase.database().ref();
var somevalue = "hi";
dbref.child("text").set(id);
alert(id);
alert(name);
}


function home() {
  window.location.href = "indexMain.html";
}
function about() {
  window.location.href = "indexMain.html#about";
}
function service() {
  window.location.href = "indexMain.html#services";
}
function contact() {
  window.location.href = "indexMain.html#contact";
}


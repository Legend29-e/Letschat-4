var firebaseConfig = {
    apiKey: "AIzaSyAGe987VfbSAhUg3H783l6YClrruSC4VmY",
    authDomain: "kwitter-a564e.firebaseapp.com",
    databaseURL: "https://kwitter-a564e-default-rtdb.firebaseio.com",
    projectId: "kwitter-a564e",
    storageBucket: "kwitter-a564e.appspot.com",
    messagingSenderId: "597180656319",
    appId: "1:597180656319:web:988c3c971b2a80ee2af40a"
  };
  
 firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome " + username + "!";
username = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome " + username + "!";
function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "Letschat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
    });});}
getData();

function redirectToRoomName(name){
    localStorage.setItem("room_name", name);
    window.location = "Letschat_page.html";
}
function logOut(){
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location="Letschat_login.html";
}


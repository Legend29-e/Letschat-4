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

  function send(){
      msg = document.getElementById("msg");
      firebase.database().ref(room_name).push({
          name:username,
          message: msg,
          like:0
      });
  }
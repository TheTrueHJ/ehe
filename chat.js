var username = localStorage.getItem("username");
document.getElementById("user").innerHTML = "Welcome, " + username;

function logout(){
    localStorage.removeItem("username");
    window.location = "index.html";
}
function add(){

}

var firebaseConfig = {
    apiKey: "AIzaSyC-K_2qiJv4GMNBE4vORYgQ9kYMCEr4wG8",
    authDomain: "tee-hee-ho-ho-ho.firebaseapp.com",
    databaseURL: "https://tee-hee-ho-ho-ho-default-rtdb.firebaseio.com",
    projectId: "tee-hee-ho-ho-ho",
    storageBucket: "tee-hee-ho-ho-ho.appspot.com",
    messagingSenderId: "441486015216",
    appId: "1:441486015216:web:1952536fc8711f2cbf6035"
  };
  
firebase.initializeApp(firebaseConfig);
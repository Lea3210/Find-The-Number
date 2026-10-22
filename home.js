let currentUser = localStorage.getItem("currentUser");

if(currentUser == null){

    location.href="index.html";

}

let users = JSON.parse(localStorage.getItem("users")) || [];

let user = users.find(u=>u.username==currentUser);

document.getElementById("userInfo").innerHTML =
"שלום " + user.username + "<br>🏆 ניקוד: " + user.score;

function logout(){

    localStorage.removeItem("currentUser");

    location.href="index.html";

}

function comingSoon(){

    location.href="comingSoon.html";

}
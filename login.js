function login(){

    let username=document.getElementById("username").value;

    let password=document.getElementById("password").value;

    let users=JSON.parse(localStorage.getItem("users")) || [];

    let user=users.find(u=>u.username==username && u.password==password);

    if(user){

        localStorage.setItem("currentUser",username);

        location.href="home.html";

    }

    else{

        alert("שם משתמש או סיסמה שגויים");

    }

}

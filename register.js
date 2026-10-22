function register(){

    let username=document.getElementById("username").value;

    let password=document.getElementById("password").value;

    let password2=document.getElementById("password2").value;

    if(username=="" || password=="" || password2==""){

        alert("יש למלא את כל השדות");

        return;
    }

    if(password!=password2){

        alert("הסיסמאות אינן תואמות");

        return;
    }

    let users=JSON.parse(localStorage.getItem("users")) || [];

    let exist=users.find(u=>u.username==username);

    if(exist){

        alert("שם המשתמש כבר קיים");

        return;
    }

    users.push({

        username:username,

        password:password,

        score:0

    });

    localStorage.setItem("users",JSON.stringify(users));

    alert("נרשמת בהצלחה!");

    location.href="index.html";

}
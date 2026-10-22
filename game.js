let board = document.getElementById("board");

let target = document.getElementById("target");

let timer = document.getElementById("timer");

let points = document.getElementById("points");

let losesDisplay = document.getElementById("loses");



let score = 0;

let loses = 0;

let wanted = 0;

let time = 10;

let interval;

let found = 0;



// יצירת צליל

function playTick(){

    let audioContext =
    new (window.AudioContext || window.webkitAudioContext)();


    let oscillator =
    audioContext.createOscillator();


    let gain =
    audioContext.createGain();



    oscillator.type="sine";

    oscillator.frequency.value=800;


    gain.gain.value=0.1;



    oscillator.connect(gain);

    gain.connect(audioContext.destination);



    oscillator.start();


    oscillator.stop(
        audioContext.currentTime + 0.1
    );

}




// יצירת לוח

function createBoard(){


    board.innerHTML="";


    let numbers=[];



    while(numbers.length<50){


        let num =
        Math.floor(Math.random()*100)+1;



        if(!numbers.includes(num)){


            numbers.push(num);


        }


    }




    numbers.forEach(number=>{


        let square =
        document.createElement("div");



        square.className="square";


        square.innerHTML=number;



        square.onclick=function(){


            check(square);


        };



        board.appendChild(square);



    });



    chooseTarget();



}





// בחירת מספר

function chooseTarget(){


    let squares =
    document.querySelectorAll(".square");



    let options=[];



    squares.forEach(square=>{


        if(square.innerHTML!="😊"){


            options.push(square.innerHTML);


        }


    });



    if(options.length==0){


        winGame();

        return;


    }



    wanted =
    options[
        Math.floor(Math.random()*options.length)
    ];



    target.innerHTML=wanted;


    startTimer();


}





// בדיקה

function check(square){


    if(square.innerHTML=="😊"){

        return;

    }



    if(square.innerHTML==wanted){



        square.innerHTML="😊";


        square.style.background="#90ee90";


        score++;

        found++;


        points.innerHTML=score;



        clearInterval(interval);



        if(found==50){


            winGame();


        }

        else{


            mixNumbers();


        }


    }



}




// ערבוב מספרים

function mixNumbers(){


    let squares =
    document.querySelectorAll(".square");



    let numbers=[];



    squares.forEach(square=>{


        if(square.innerHTML!="😊"){


            numbers.push(square.innerHTML);


        }


    });



    numbers.sort(
        ()=>Math.random()-0.5
    );



    let index=0;



    squares.forEach(square=>{


        if(square.innerHTML!="😊"){


            square.innerHTML=numbers[index];

            index++;


        }


    });



    chooseTarget();



}





// טיימר

function startTimer(){


    clearInterval(interval);



    time=10;


    timer.innerHTML=time;



    interval=setInterval(()=>{


        time--;


        timer.innerHTML=time;



        playTick();



        if(time<=0){



            clearInterval(interval);



            loses++;


            losesDisplay.innerHTML=loses;



            mixNumbers();


        }



    },1000);



}





// ניצחון

function winGame(){


    clearInterval(interval);



    localStorage.setItem(
        "lastScore",
        score
    );



    localStorage.setItem(
        "lastLoses",
        loses
    );



    saveScore();



    location.href="win.html";


}





// שמירת ניקוד

function saveScore(){


    let username =
    localStorage.getItem("currentUser");



    let users =
    JSON.parse(localStorage.getItem("users")) || [];



    let user =
    users.find(
        u=>u.username==username
    );



    if(user){


        user.score += score;


    }



    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );


}



createBoard();
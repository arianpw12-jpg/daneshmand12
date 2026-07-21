// =====================================
// GAME DATA
// =====================================

const game = {

    playerName:"",

    score:0

};


window.game = game;





// =====================================
// START GAME
// =====================================


window.addEventListener("load",function(){



console.log("GAME LOADED");



const startButton =
document.getElementById("startButton");


const logo =
document.getElementById("logo");


const nameBox =
document.getElementById("nameBox");


const continueButton =
document.getElementById("continueButton");


const playerNameInput =
document.getElementById("playerName");





// شروع بازی


if(startButton){


startButton.onclick=function(){


console.log("START CLICKED");


logo.style.display="none";


startButton.style.display="none";


nameBox.style.display="block";


};



}







// ثبت نام


if(continueButton){



continueButton.onclick=function(){



const name =
playerNameInput.value.trim();




if(!name){


alert("نام را وارد کنید");


return;


}





game.playerName=name;



localStorage.setItem(
"playerName",
name
);





nameBox.style.display="none";





// موسیقی


const bgMusic =
document.getElementById("bgMusic");



if(bgMusic){


bgMusic.volume=.25;


bgMusic.play()
.catch(()=>{});


}







// شروع دیالوگ


if(typeof beginDialog==="function"){


beginDialog();


}

else{


console.error(
"beginDialog NOT FOUND"
);


}



};



}







// دکمه خانه


const homeButton =
document.getElementById("homeButton");



if(homeButton){



homeButton.onclick=function(){



const answer =
confirm(
"آیا می‌خواهی به صفحه شروع برگردی؟"
);



if(answer){


location.reload();


}



};



}



// راه‌اندازی پنجره درباره بازی
initAboutWindow();

// اولین تنظیم اندازه


resizeGame();



});









// =====================================
// RESPONSIVE GAME SCALE
// =====================================
function resizeGame(){

    const game =
    document.getElementById("gameContainer");


    const baseWidth = 1200;
    const baseHeight = 650;


    const w = window.innerWidth;
    const h = window.innerHeight;


    const scaleX = w / baseWidth;
    const scaleY = h / baseHeight;


    let scale = Math.min(scaleX, scaleY);


    // تنظیم مخصوص موبایل
if (w < 900) {

    // اگر ارتفاع گوشی کم بود، بیشتر کوچک کن
    if (h < 700) {
        scale *= 0.78;
    } else {
        scale *= 0.85;
    }

    }


    game.style.transform =
    `
    translate(-50%, -50%)
    scale(${scale})
    `;


    game.style.left="50%";
    game.style.top="50%";

}


window.addEventListener(
"resize",
resizeGame
);


window.addEventListener(
"load",
resizeGame
);



// =====================================
// SCORE SYSTEM
// =====================================



window.addScore=function(points){



game.score += points;





const score =
document.getElementById(
"scoreValue"
);




if(score){


score.textContent =
game.score;


}





playSuccessSound();



};









// =====================================
// SUCCESS SOUND
// =====================================



window.playSuccessSound=function(){



const sound =
document.getElementById(
"successSound"
);




if(sound){



sound.currentTime=0;


sound.volume=.7;



sound.playbackRate=4;



sound.play()
.catch(()=>{});



}



};
// =====================================
// درباره بازی
// =====================================
function initAboutWindow(){

    const aboutButton =
    document.getElementById("aboutGameButton");

    const aboutWindow =
    document.getElementById("aboutGameWindow");

    const closeButton =
    document.getElementById("closeAboutGame");

    if(!aboutButton || !aboutWindow || !closeButton){

        console.warn("About Game عناصر پیدا نشدند.");

        return;

    }

    aboutButton.addEventListener("click",function(){

        aboutWindow.style.display="flex";

    });

    closeButton.addEventListener("click",function(){

        aboutWindow.style.display="none";

    });

}

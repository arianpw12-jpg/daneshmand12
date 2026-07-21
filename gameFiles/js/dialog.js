// ======================================
// Dialog System
// ======================================

document.addEventListener(
"DOMContentLoaded",
()=>{

const dialogBox =
document.getElementById("dialogBox");


const speakerImage =
document.getElementById("speakerImage");


const speakerName =
document.getElementById("speakerName");


const dialogText =
document.getElementById("dialogText");


const nextButton =
document.getElementById("nextButton");



let dialogIndex = 0;

let currentDialogs = [];

let finishCallback = null;



// ======================================
// دیالوگ شروع
// ======================================


const startDialogs = [

{
speaker:"پروفسور دانا",
image:"assets/characters/professor/professor_idle.png",
text:"سلام {player}، به آزمایشگاه من خوش آمدی!"
},


{
speaker:"پروفسور دانا",
image:"assets/characters/professor/professor_happy.png",
text:"این آزمایشگاه پر از کشفیات هیجان‌انگیز است."
},


{
speaker:"ربو",
image:"assets/characters/robo/robo_idle.png",
text:"من همیشه کنارت هستم تا اگر لازم شد کمکت کنم."
},


{
speaker:"پروفسور دانا",
image:"assets/characters/professor/professor_teach.png",
text:"خب، حالا برویم سراغ اولین مأموریت!"
}

];



// ======================================
// شروع دیالوگ
// ======================================


window.beginDialog=function(){


    playDialogs(
        startDialogs,
        ()=>{


            const missionButton =
            document.getElementById("missionButton");


            if(missionButton){

                missionButton.style.display="block";

            }


        }
    );


};



// ======================================
// اجرای دیالوگ
// ======================================


window.playDialogs=function(dialogs,callback){


    if(!dialogBox)
        return;



    currentDialogs = dialogs;

    dialogIndex=0;

    finishCallback=callback;



    dialogBox.style.display="flex";


    showDialog();


};



// ======================================
// نمایش دیالوگ
// ======================================


function showDialog(){


    const dialog =
    currentDialogs[dialogIndex];


    if(!dialog)
        return;



    speakerName.textContent =
    dialog.speaker;



    speakerImage.src =
    dialog.image;

speakerImage.style.display = "block";
speakerImage.style.visibility = "visible";
    let text =
    dialog.text.replace(
    "{player}",
    window.game.playerName || ""
    );



    dialogText.textContent=text;


}



// ======================================
// ادامه
// ======================================


if(nextButton){


nextButton.onclick=function(){


    dialogIndex++;



    if(dialogIndex >= currentDialogs.length){


        dialogBox.style.display="none";


        if(finishCallback){

            finishCallback();

        }


        return;

    }



    showDialog();


};


}



});
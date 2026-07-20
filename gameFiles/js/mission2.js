// =====================================
// Mission 2
// تغییر حالت مواد
// =====================================

"use strict";

console.log("MISSION2 LOADED");


// =====================================
// وضعیت مأموریت
// =====================================

const Mission2 = {

    started:false,

    finished:false,

    currentStep:0,

    prediction:null,

    dragging:false,

    dragOffsetX:0,

    dragOffsetY:0,

    chocolateReward:false,

    elements:{}

};


// =====================================
// دریافت عناصر صفحه
// =====================================

function cacheMission2Elements(){

    const e = Mission2.elements;

    e.button =
    document.getElementById("mission2Button");

    e.intro =
    document.getElementById("mission2Intro");

    e.introText =
    document.getElementById("mission2Text");

    e.startButton =
    document.getElementById("startMission2");

    e.area =
    document.getElementById("mission2Area");

    e.predictionBox =
    document.getElementById("predictionBox");

    e.predictionButton =
    document.getElementById("predictionButton");

    e.ice =
    document.getElementById("iceCube");

    e.water =
    document.getElementById("waterDrop");

    e.heat =
    document.getElementById("heatSource");

    e.cold =
    document.getElementById("coldSource");

    e.solidChocolate =
    document.getElementById("solidChocolate");

    e.meltedChocolate =
    document.getElementById("meltedChocolate");

    e.heatChocolateButton =
    document.getElementById("heatChocolateButton");

    e.background =
    document.getElementById("background");

}

cacheMission2Elements();


// =====================================
// دیالوگ معرفی مأموریت دوم
// =====================================

const mission2IntroDialogs = [

    {

        speaker:"پروفسور دانا",

        image:"assets/characters/professor/professor_happy.png",

        text:"سلام دوباره {player}! 👋"

    },

    {

        speaker:"پروفسور دانا",

        image:"assets/characters/professor/professor_teach.png",

        text:"این بار قرار است تغییر حالت مواد را با آزمایش واقعی ببینیم."

    },

    {

        speaker:"ربو",

        image:"assets/characters/robo/robo_idle.png",

        text:"🤖 امروز می‌بینیم که گرما و سرما چگونه مواد را تغییر می‌دهند."

    }

];


// =====================================
// دیالوگ قبل از آزمایش ذوب
// =====================================

const meltingDialogs = [

    {

        speaker:"پروفسور دانا",

        image:"assets/characters/professor/professor_teach.png",

        text:"روی میز یک تکه یخ و یک منبع گرما قرار دارد."

    },

    {

        speaker:"پروفسور دانا",

        image:"assets/characters/professor/professor_teach.png",

        text:"قبل از انجام آزمایش، حدس بزن اگر یخ را گرم کنیم چه اتفاقی می‌افتد."

    },

    {

        speaker:"ربو",

        image:"assets/characters/robo/robo_idle.png",

        text:"🤖 اول حدس بزن، بعد نتیجه واقعی را با هم می‌بینیم."

    }

];
// =====================================
// ورود به مأموریت دوم
// =====================================

function enterMission2(){

    const e = Mission2.elements;

    Mission2.started = true;

    // مخفی شدن دکمه مأموریت دوم
    e.button.style.display = "none";

    // تغییر پس‌زمینه
    e.background.src =
    "assets/backgrounds/mission2_background.png";

    // مخفی شدن عناصر مأموریت اول
    const solidBox =
    document.getElementById("solidBox");

    const liquidBox =
    document.getElementById("liquidBox");

    const missionItem =
    document.getElementById("missionItem");

    if(solidBox) solidBox.style.display="none";
    if(liquidBox) liquidBox.style.display="none";
    if(missionItem) missionItem.style.display="none";

    // اجرای دیالوگ معرفی
    playDialogs(

        mission2IntroDialogs,

        openMission2Intro

    );

}



// =====================================
// پنجره معرفی مأموریت
// =====================================

function openMission2Intro(){

    const e = Mission2.elements;

    e.intro.style.display = "block";

    e.introText.innerHTML =

        "🔬 امروز می‌خواهیم با انجام آزمایش واقعی، " +

        "تغییر حالت مواد را مشاهده کنیم." +

        "<br><br>" +

        "ابتدا یخ را گرم می‌کنیم و بعد نتیجه را بررسی خواهیم کرد.";

}



// =====================================
// شروع مأموریت دوم
// =====================================

function startMission2(){

    const e = Mission2.elements;

    e.intro.style.display = "none";

    e.area.style.display = "block";

    // مرحله اول فقط یخ و منبع گرما دیده می‌شوند

    e.ice.style.display = "block";

    e.heat.style.display = "block";

    e.water.style.display = "none";

    e.cold.style.display = "none";

    e.solidChocolate.style.display = "none";

    e.meltedChocolate.style.display = "none";

    e.heatChocolateButton.style.display = "none";


    playDialogs(

        meltingDialogs,

        showPredictionBox

    );

}



// =====================================
// نمایش پنجره پیش‌بینی
// =====================================

function showPredictionBox(){

    Mission2.elements.predictionBox.style.display = "block";

}



// =====================================
// اتصال دکمه‌ها
// =====================================

if(Mission2.elements.button){

    Mission2.elements.button.onclick =

    enterMission2;

}



if(Mission2.elements.startButton){

    Mission2.elements.startButton.onclick =

    startMission2;

}
// =====================================
// بررسی پاسخ کودک
// =====================================

function checkPrediction(){

    const answer =
    document.querySelector(
        'input[name="prediction"]:checked'
    );

    if(!answer){

        alert("ابتدا یک گزینه را انتخاب کن.");

        return;

    }

    Mission2.prediction = answer.value;

    Mission2.elements.predictionBox.style.display = "none";


    // پاسخ صحیح

    if(answer.value=="2"){

        playDialogs(

            [

                {

                    speaker:"پروفسور دانا",

                    image:"assets/characters/professor/professor_happy.png",

                    text:"آفرین {player}! حدست درست بود."

                }

            ],

            startMeltingExperiment

        );

    }

    // پاسخ اشتباه

    else{

        playDialogs(

            [

                {

                    speaker:"پروفسور دانا",

                    image:"assets/characters/professor/professor_teach.png",

                    text:"اشکالی ندارد. حالا با آزمایش جواب درست را پیدا می‌کنیم."

                }

            ],

            startMeltingExperiment

        );

    }

}



// =====================================
// شروع آزمایش واقعی
// =====================================

function startMeltingExperiment(){

    playDialogs(

        [

            {

                speaker:"پروفسور دانا",

                image:"assets/characters/professor/professor_teach.png",

                text:"یخ را بگیر و روی منبع گرما قرار بده."

            },

            {

                speaker:"ربو",

                image:"assets/characters/robo/robo_idle.png",

                text:"🤖 فقط کافی است یخ را بکشانی."

            }

        ],

        enableMission2Drag

    );

}



// =====================================
// فعال شدن Drag
// =====================================

function enableMission2Drag(){

    const ice =
    Mission2.elements.ice;

    ice.style.cursor="grab";

    ice.style.touchAction="none";

    ice.addEventListener(

        "pointerdown",

        startMission2Drag

    );

}



// =====================================
// شروع Drag
// =====================================

function startMission2Drag(e){

    Mission2.dragging = true;

    const ice =
    Mission2.elements.ice;

    ice.setPointerCapture(e.pointerId);

    const rect =
    ice.getBoundingClientRect();

    const scale =
    rect.width /
    ice.offsetWidth;

    Mission2.dragOffsetX =
    (e.clientX - rect.left)/scale;

    Mission2.dragOffsetY =
    (e.clientY - rect.top)/scale;

}



// =====================================
// حرکت وسیله
// =====================================

window.addEventListener(

    "pointermove",

    function(e){

        if(!Mission2.dragging) return;

        const game =
        document.getElementById("gameContainer");

        const gameRect =
        game.getBoundingClientRect();

        const scaleX =
        gameRect.width / 1200;

        const scaleY =
        gameRect.height / 630;

        let x =
        (e.clientX-gameRect.left)/scaleX
        -
        Mission2.dragOffsetX;

        let y =
        (e.clientY-gameRect.top)/scaleY
        -
        Mission2.dragOffsetY;

        const ice =
        Mission2.elements.ice;

        ice.style.left =
        x+"px";

        ice.style.top =
        y+"px";

    }

);



// =====================================
// پایان Drag
// =====================================

window.addEventListener(

    "pointerup",

    function(e){

        if(!Mission2.dragging) return;

        Mission2.dragging=false;

        Mission2.elements.ice.releasePointerCapture(
            e.pointerId
        );

        checkIceDrop();

    }

);



// =====================================
// بررسی برخورد یخ با منبع گرما
// =====================================

function checkIceDrop(){

    const iceRect =
    Mission2.elements.ice.getBoundingClientRect();

    const heatRect =
    Mission2.elements.heat.getBoundingClientRect();

    if(intersect(iceRect,heatRect)){

        meltIce();

        return;

    }


    resetIcePosition();

}



// =====================================
// برگرداندن یخ
// =====================================

function resetIcePosition(){

    const ice =
    Mission2.elements.ice;

    ice.style.left="220px";

    ice.style.top="320px";

}



// =====================================
// بررسی برخورد
// =====================================

function intersect(a,b){

    return !(

        a.right < b.left ||

        a.left > b.right ||

        a.bottom < b.top ||

        a.top > b.bottom

    );

}



// =====================================
// دکمه ثبت پاسخ
// =====================================

Mission2.elements.predictionButton.onclick =

checkPrediction;
// =====================================
// ذوب شدن یخ
// =====================================

function meltIce(){

    const e = Mission2.elements;

    addScore(10);

    // شروع انیمیشن ذوب شدن

    e.ice.style.animation =
    "meltIce 1s forwards";

    // بعد از پایان انیمیشن

    setTimeout(function(){

        e.ice.style.display="none";

        e.water.style.display="block";

        e.water.style.animation =
        "waterAppear .8s ease forwards";


        playDialogs(

            [

                {

                    speaker:"پروفسور دانا",

                    image:"assets/characters/professor/professor_happy.png",

                    text:"دیدی؟ یخ با گرفتن گرما ذوب شد."

                },

                {

                    speaker:"پروفسور دانا",

                    image:"assets/characters/professor/professor_teach.png",

                    text:"یخ از حالت جامد به مایع تبدیل شد."

                },

                {

                    speaker:"ربو",

                    image:"assets/characters/robo/robo_idle.png",

                    text:"🤖 این تغییر حالت را ذوب شدن می‌گویند."

                }

            ],

            showChocolateExample

        );

    },1000);

}

// =====================================
// مثال شکلات
// =====================================

function showChocolateExample(){

    const e = Mission2.elements;

    e.water.style.display = "none";

    e.solidChocolate.style.display = "block";

    playDialogs(

        [

            {

                speaker:"پروفسور دانا",

                image:"assets/characters/professor/professor_teach.png",

                text:"حالا یک مثال دیگر ببین."

            },

            {

                speaker:"پروفسور دانا",

                image:"assets/characters/professor/professor_teach.png",

                text:"این شکلات جامد است."

            },

            {

                speaker:"ربو",

                image:"assets/characters/robo/robo_idle.png",

                text:"🤖 اگر آن را گرم کنیم چه می‌شود؟"

            }

        ],

        function(){

            e.heatChocolateButton.style.display="block";

        }

    );

}



// =====================================
// دکمه گرم کردن شکلات
// =====================================

Mission2.elements.heatChocolateButton.onclick = function(){

    const e = Mission2.elements;

    e.heatChocolateButton.style.display="none";

    e.solidChocolate.style.display="none";

    e.meltedChocolate.style.display="block";

    if(!Mission2.chocolateReward){

        Mission2.chocolateReward=true;

        addScore(20);

    }

    playDialogs(

        [

            {

                speaker:"پروفسور دانا",

                image:"assets/characters/professor/professor_happy.png",

                text:"شکلات هم با گرفتن گرما ذوب شد."

            },

            {

                speaker:"ربو",

                image:"assets/characters/robo/robo_idle.png",

                text:"🤖 پس بعضی جامدها با گرما به مایع تبدیل می‌شوند."

            }

        ],

        startFreezingLesson
    );

};



// =====================================
// ذخیره درس
// =====================================

function saveMission2Lesson(){

    addLesson(

        "تغییر حالت مواد",

        "📖 <b>ذوب شدن</b><br><br>"+

        "✔ وقتی جامد گرما بگیرد، ممکن است به مایع تبدیل شود.<br><br>"+

        "نمونه‌ها:<br>"+

        "🧊 یخ → آب<br>"+

        "🍫 شکلات → شکلات مایع"

    );

}



// =====================================
// پایان مأموریت
// =====================================

function finishMission2(){

    saveMission2Lesson();

    playDialogs(

        [

            {

                speaker:"پروفسور دانا",

                image:"assets/characters/professor/professor_happy.png",

                text:"تبریک {player}! مأموریت دوم را با موفقیت انجام دادی."

            },

            {

                speaker:"پروفسور دانا",

                image:"assets/characters/professor/professor_teach.png",

                text:"امروز یاد گرفتیم که بعضی جامدها با گرفتن گرما ذوب می‌شوند."

            },

            {

                speaker:"ربو",

                image:"assets/characters/robo/robo_idle.png",

                text:"📖 مطالب این درس به دفترچه یادگیری اضافه شد."

            }

        ],

        function(){

            Mission2.finished=true;

            const mission3Button=

            document.getElementById("mission3Button");

            if(mission3Button){

                mission3Button.style.display="block";

            }

        }

    );

}
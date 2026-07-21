// =====================================
// Mission 2 Freeze System
// دانشمند کوچولو
// =====================================

"use strict";

console.log("Mission2 Freeze Loaded");

// =====================================
// وضعیت مرحله انجماد
// =====================================

let freezingLessonFinished = false;


// =====================================
// عناصر مرحله انجماد
// =====================================

const Freeze = {

    water:
    document.getElementById("waterDrop"),

    ice:
    document.getElementById("iceCube"),

    cold:
    document.getElementById("coldSource"),

    button:
    document.getElementById("coldButton"),

    heat:
    document.getElementById("heatSource"),

    solidChocolate:
    document.getElementById("solidChocolate"),

    meltedChocolate:
    document.getElementById("meltedChocolate"),

    missionCompleteWindow:
    document.getElementById("missionCompleteWindow"),

    missionCompleteText:
    document.getElementById("missionCompleteText"),

    startMission3Button:
    document.getElementById("startMission3Button")

};


// =====================================
// آماده‌سازی اولیه
// =====================================

if(Freeze.button){

    Freeze.button.style.display = "none";

}


// =====================================
// گفت‌وگوهای شروع مرحله انجماد
// =====================================

const freezingDialogs = [

    {

        speaker:"پروفسور دانا",

        image:"assets/characters/professor/professor_teach.png",

        text:"حالا می‌خواهیم ببینیم سرما چه تغییری در مواد ایجاد می‌کند."

    },

    {

        speaker:"ربو",

        image:"assets/characters/robo/robo_idle.png",

        text:"🤖 یعنی ممکن است آب دوباره تبدیل به یخ شود؟"

    },

    {

        speaker:"پروفسور دانا",

        image:"assets/characters/professor/professor_happy.png",

        text:"دقیقاً! حالا آزمایش را انجام بده."

    }

];
// =====================================
// شروع مرحله انجماد
// =====================================

function startFreezingLesson(){
console.log("START FREEZING");

    if(freezingLessonFinished){

        return;

    }

    // ---------------------------------
    // پاک کردن وسایل مرحله ذوب
    // ---------------------------------

    if(Freeze.heat){

        Freeze.heat.style.display = "none";

    }

    if(Freeze.solidChocolate){

        Freeze.solidChocolate.style.display = "none";

    }

    

    // ---------------------------------
    // آماده کردن مرحله انجماد
    // ---------------------------------

    if(Freeze.water){

        Freeze.water.style.display = "block";

    }
if(Freeze.meltedChocolate){

        Freeze.meltedChocolate.style.display = "block";

    }



    if(Freeze.ice){

        Freeze.ice.style.display = "none";

    }

    if(Freeze.cold){

        Freeze.cold.style.display = "block";

    }


    // ---------------------------------
    // نمایش گفتگوهای آموزشی
    // ---------------------------------

    playDialogs(

        freezingDialogs,

        function(){

            if(Freeze.button){

                Freeze.button.style.display = "block";

            }

        }

    );

}
// =====================================
// انجماد مواد
// =====================================

function freezeMaterials(){
console.log("FREEZE MATERIALS");
    // ---------------------------------
    // مخفی شدن آب
    // ---------------------------------

    if(Freeze.water){

        Freeze.water.style.display = "none";

    }


    // ---------------------------------
    // نمایش یخ
    // ---------------------------------

    if(Freeze.ice){

        Freeze.ice.style.display = "block";
Freeze.ice.style.animation = "none";

Freeze.ice.style.opacity = "1";

Freeze.ice.style.transform = "none";

        Freeze.ice.style.left = "50%";
        Freeze.ice.style.top = "45%";
        Freeze.ice.style.transform = "translate(-50%,-50%)";

    }


    // ---------------------------------
    // جامد شدن شکلات
    // ---------------------------------

    if(Freeze.meltedChocolate){

        Freeze.meltedChocolate.style.display = "none";

    }

    if(Freeze.solidChocolate){

        Freeze.solidChocolate.style.display = "block";

    }


    // ---------------------------------
    // گفتگوهای آموزشی
    // ---------------------------------

    playDialogs(

        [

            {

                speaker:"پروفسور دانا",

                image:"assets/characters/professor/professor_happy.png",

                text:"آفرین! آب و شکلات با از دست دادن گرما دوباره جامد شدند."

            },

            {

                speaker:"ربو",

                image:"assets/characters/robo/robo_idle.png",

                text:"🤖 یعنی سرما می‌تواند مایع‌ها را دوباره جامد کند؟"

            },

            {

                speaker:"پروفسور دانا",

                image:"assets/characters/professor/professor_teach.png",

                text:"دقیقاً! به این تغییر حالت «انجماد» می‌گوییم."

            }

        ],

        function(){

            finishFreezingExperiment();
console.log("FINISH FREEZING");

        }

    );

}


// =====================================
// دکمه سرد کردن
// =====================================

if(Freeze.button){

    Freeze.button.onclick = function(){

        Freeze.button.style.display = "none";

        freezeMaterials();


    };

}
// =====================================
// ثبت درس انجماد
// =====================================

function saveFreezingLesson(){

    addLesson(

        "ذوب و انجماد",

        "📖 <b>ذوب</b><br><br>" +

        "✔ با گرفتن گرما، بعضی جامدها به مایع تبدیل می‌شوند.<br>" +

        "✔ نمونه: یخ → آب ، شکلات → شکلات مایع.<br><br>" +

        "📖 <b>انجماد</b><br><br>" +

        "✔ با از دست دادن گرما، بعضی مایع‌ها دوباره جامد می‌شوند.<br>" +

        "✔ نمونه: آب → یخ."

    );

}


// =====================================
// پایان آزمایش انجماد
// =====================================

function finishFreezingExperiment(){

    if(freezingLessonFinished){

        return;

    }

    freezingLessonFinished = true;


    // ثبت امتیاز

    addScore(30);


    // ثبت درس

    saveFreezingLesson();


    // گفت‌وگوی پایانی

    playDialogs(

        [

            {

                speaker:"پروفسور دانا",

                image:"assets/characters/professor/professor_happy.png",

                text:"آفرین {player}! 👏"

            },

            {

                speaker:"پروفسور دانا",

                image:"assets/characters/professor/professor_teach.png",

                text:"امروز یاد گرفتیم گرما باعث ذوب و سرما باعث انجماد می‌شود."

            },

            {

                speaker:"ربو",

                image:"assets/characters/robo/robo_idle.png",

                text:"📖 مطالب این درس هم داخل دفترچه یادگیری ذخیره شد."

            }

        ],

        function(){

            finishMission2();

        }

    );

}


// =====================================
// پایان مأموریت دوم
// =====================================

function finishMission2(){

    if(Mission2.finished){

        return;

    }

    Mission2.finished = true;


    if(Freeze.missionCompleteText){

        Freeze.missionCompleteText.innerHTML =

            "🎉 مأموریت دوم را با موفقیت انجام دادی.<br><br>" +

            "⭐ 30 امتیاز دریافت کردی.<br>" +

            "📖 درس جدید به دفترچه یادگیری اضافه شد.";

    }


    if(Freeze.missionCompleteWindow){

        Freeze.missionCompleteWindow.style.display = "block";

    }

}


// =====================================
// ورود به مأموریت سوم
// =====================================

if(Freeze.startMission3Button){

    Freeze.startMission3Button.onclick = function(){

        Freeze.missionCompleteWindow.style.display = "none";

        startMission3();

    };

}
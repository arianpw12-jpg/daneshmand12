// =====================================
// مأموریت اول
// دسته‌بندی جامد و مایع
// =====================================

console.log("MISSION 1 LOADED");


// =====================================
// عناصر صفحه
// =====================================

const missionButton =
document.getElementById("missionButton");

const missionIntro =
document.getElementById("missionIntro");

const missionText =
document.getElementById("missionText");

const startMission =
document.getElementById("startMission");

const background =
document.getElementById("background");

const missionArea =
document.getElementById("missionArea");

const solidBox =
document.getElementById("solidBox");

const liquidBox =
document.getElementById("liquidBox");

const missionItem =
document.getElementById("missionItem");

const mission2Button =
document.getElementById("mission2Button");


// دکمه مأموریت دوم در ابتدا مخفی است

if(mission2Button){

    mission2Button.style.display = "none";

}


// =====================================
// متغیرهای مأموریت
// =====================================

let currentItem = 0;

let wrongCount = 0;

let missionFinished = false;


// =====================================
// دیالوگ معرفی مأموریت
// =====================================

const missionGuide = [

{
    speaker:"پروفسور دانا",
    image:"assets/characters/professor/professor_teach.png",
    text:"عالی {player}! 👏"
},

{
    speaker:"پروفسور دانا",
    image:"assets/characters/professor/professor_teach.png",
    text:"در این مأموریت باید وسایل را دسته‌بندی کنی."
},

{
    speaker:"پروفسور دانا",
    image:"assets/characters/professor/professor_teach.png",
    text:"اگر وسیله جامد بود آن را داخل باکس جامد قرار بده."
},

{
    speaker:"پروفسور دانا",
    image:"assets/characters/professor/professor_teach.png",
    text:"اگر وسیله مایع بود آن را داخل باکس مایع قرار بده."
},

{
    speaker:"پروفسور دانا",
    image:"assets/characters/professor/professor_happy.png",
    text:"آماده‌ای؟ 😊"
}

];


// =====================================
// وسایل مأموریت
// =====================================

const missionItems = [

{
    name:"سنگ",
    image:"assets/ui/rock.png",
    type:"solid",
    lesson:"سنگ جامد است چون شکل ثابتی دارد."
},

{
    name:"آب",
    image:"assets/ui/water.png",
    type:"liquid",
    lesson:"آب مایع است چون شکل ظرف را می‌گیرد."
},

{
    name:"یخ",
    image:"assets/ui/ice.png",
    type:"solid",
    lesson:"یخ جامد است چون شکل ثابتی دارد."
},

{
    name:"شیر",
    image:"assets/ui/milk.png",
    type:"liquid",
    lesson:"شیر مایع است و شکل ظرف را می‌گیرد."
},

{
    name:"سیب",
    image:"assets/ui/apple.png",
    type:"solid",
    lesson:"سیب جامد است و شکل خود را حفظ می‌کند."
},

{
    name:"آبمیوه",
    image:"assets/ui/juice.png",
    type:"liquid",
    lesson:"آبمیوه مایع است."
},

{
    name:"کتاب",
    image:"assets/ui/book.png",
    type:"solid",
    lesson:"کتاب جامد است."
},

{
    name:"عسل",
    image:"assets/ui/honey.png",
    type:"liquid",
    lesson:"عسل مایع است."
},

{
    name:"مداد",
    image:"assets/ui/pencil.png",
    type:"solid",
    lesson:"مداد جامد است."
},

{
    name:"روغن",
    image:"assets/ui/oil.png",
    type:"liquid",
    lesson:"روغن مایع است."
}

];


// =====================================
// کلیک روی دکمه مأموریت
// =====================================

missionButton.onclick = function(){

    missionButton.style.display = "none";

    background.src =
    "assets/backgrounds/mission1.png";

    openMissionIntro();

};


// =====================================
// معرفی مأموریت
// =====================================

function openMissionIntro(){

    missionIntro.style.display = "block";

    missionText.innerHTML =

    "اوه! 😄<br><br>" +

    "امروز وسایل آزمایشگاه به هم ریخته‌اند.<br><br>" +

    "کمکم می‌کنی آن‌ها را دسته‌بندی کنیم؟";

}


// =====================================
// شروع مأموریت
// =====================================

startMission.onclick = function(){

    missionIntro.style.display = "none";

    playDialogs(

        missionGuide,

        function(){

            startMissionGame();

        }

    );

};
// =====================================
// شروع بازی
// =====================================

function startMissionGame(){

    missionArea.style.display = "block";

    solidBox.style.opacity = "1";
    liquidBox.style.opacity = "1";

    solidBox.style.animation =
    "solidEnter .8s ease forwards";

    setTimeout(function(){

        liquidBox.style.animation =
        "liquidEnter .8s ease forwards";

    },300);


    setTimeout(function(){

        showNextItem();

    },1200);

}



// =====================================
// نمایش وسیله بعدی
// =====================================

function showNextItem(){

    if(currentItem >= missionItems.length){

        finishMission();
        return;

    }

    missionItem.src =
    missionItems[currentItem].image;

    missionItem.style.display="block";

    missionItem.style.left="50%";
    missionItem.style.bottom="70px";
    missionItem.style.top="";
    missionItem.style.transform="translateX(-50%)";

    missionItem.style.animation="none";

    setTimeout(function(){

        missionItem.style.animation =
        "itemAppear .6s ease forwards";

    },20);

}



// =====================================
// Drag & Drop
// Desktop + Mobile
// =====================================

let isDragging = false;

let dragOffsetX = 0;
let dragOffsetY = 0;

const GAME_WIDTH = 1200;
const GAME_HEIGHT = 630;

missionItem.style.touchAction="none";

missionItem.addEventListener(
"pointerdown",
startDrag
);

window.addEventListener(
"pointermove",
dragItem
);

window.addEventListener(
"pointerup",
endDrag
);



// =====================================
// شروع Drag
// =====================================

function startDrag(e){

    if(missionItem.style.display=="none")
    return;

    isDragging = true;

    missionItem.setPointerCapture(e.pointerId);

    const rect =
    missionItem.getBoundingClientRect();

    const scale =
    rect.width /
    missionItem.offsetWidth;

    dragOffsetX =
    (e.clientX - rect.left)
    /
    scale;

    dragOffsetY =
    (e.clientY - rect.top)
    /
    scale;

    missionItem.style.cursor="grabbing";

}



// =====================================
// حرکت وسیله
// =====================================

function dragItem(e){

    if(!isDragging)
    return;

    const gameRect =
    gameContainer.getBoundingClientRect();

    const scaleX =
    gameRect.width /
    GAME_WIDTH;

    const scaleY =
    gameRect.height /
    GAME_HEIGHT;

    let x =
    (e.clientX - gameRect.left)
    /
    scaleX
    -
    dragOffsetX;

    let y =
    (e.clientY - gameRect.top)
    /
    scaleY
    -
    dragOffsetY;


    x =
    Math.max(
        0,
        Math.min(
            GAME_WIDTH - missionItem.offsetWidth,
            x
        )
    );

    y =
    Math.max(
        0,
        Math.min(
            GAME_HEIGHT - missionItem.offsetHeight,
            y
        )
    );


    missionItem.style.left =
    x + "px";

    missionItem.style.top =
    y + "px";

    missionItem.style.bottom =
    "auto";

    missionItem.style.transform =
    "none";

}



// =====================================
// پایان Drag
// =====================================

function endDrag(e){

    if(!isDragging)
    return;

    isDragging = false;

    missionItem.releasePointerCapture(
        e.pointerId
    );

    missionItem.style.cursor="grab";

    checkDrop();

}
// =====================================
// بررسی انداختن داخل باکس
// =====================================

function checkDrop(){

    const itemRect =
    missionItem.getBoundingClientRect();

    const solidRect =
    solidBox.getBoundingClientRect();

    const liquidRect =
    liquidBox.getBoundingClientRect();

    const itemType =
    missionItems[currentItem].type;


    // ----------------------------
    // باکس جامد
    // ----------------------------

    if(intersect(itemRect,solidRect)){

        if(itemType=="solid"){

            correctAnswer();

        }else{

            resetItemPosition();

            showHint();

        }

        return;

    }


    // ----------------------------
    // باکس مایع
    // ----------------------------

    if(intersect(itemRect,liquidRect)){

        if(itemType=="liquid"){

            correctAnswer();

        }else{

            resetItemPosition();

            showHint();

        }

        return;

    }


    // روی هیچ باکسی نبود

    resetItemPosition();

}



// =====================================
// بررسی برخورد دو مستطیل
// =====================================

function intersect(a,b){

    const margin = 40;

    return !(

        a.right < b.left + margin ||

        a.left > b.right - margin ||

        a.bottom < b.top + margin ||

        a.top > b.bottom - margin

    );

}



// =====================================
// برگشت وسیله به محل اولیه
// =====================================

function resetItemPosition(){

    missionItem.style.left = "50%";

    missionItem.style.top = "";

    missionItem.style.bottom = "70px";

    missionItem.style.transform =
    "translateX(-50%)";

}



// =====================================
// پاسخ صحیح
// =====================================

function correctAnswer(){

    wrongCount = 0;

    addScore(1);

    missionItem.style.display = "none";


    showLessonDialog(function(){

        currentItem++;

        if(currentItem >= missionItems.length){

            finishMission();

            return;

        }

        showNextItem();

    });

}



// =====================================
// راهنمای ربو
// =====================================

function showHint(){

    wrongCount++;


    if(wrongCount==1){

        playDialogs(

        [

            {

                speaker:"ربو",

                image:"assets/characters/robo/robo_idle.png",

                text:"اشکالی ندارد {player} 😊 دوباره امتحان کن."

            }

        ]

        );

        return;

    }


    if(wrongCount==2){

        playDialogs(

        [

            {

                speaker:"ربو",

                image:"assets/characters/robo/robo_idle.png",

                text:"فکر کن... آیا این وسیله شکل خودش را حفظ می‌کند یا شکل ظرف را می‌گیرد؟"

            }

        ]

        );

        return;

    }


    playDialogs(

    [

        {

            speaker:"پروفسور دانا",

            image:"assets/characters/professor/professor_teach.png",

            text:missionItems[currentItem].lesson

        }

    ]

    );

}
// =====================================
// توضیح علمی پروفسور
// =====================================

function showLessonDialog(callback){

    playDialogs(

        [

            {

                speaker:"پروفسور دانا",

                image:"assets/characters/professor/professor_teach.png",

                text:missionItems[currentItem].lesson

            }

        ],

        callback

    );

}



// =====================================
// ذخیره درس در دفترچه
// =====================================

function saveMissionLesson(){

    addLesson(

        "جامد و مایع",

        `

<h3>جامد</h3>

<p>

جامدها شکل ثابتی دارند و شکل خود را حفظ می‌کنند.

</p>

<ul>

<li>سنگ</li>

<li>یخ</li>

<li>کتاب</li>

<li>مداد</li>

<li>سیب</li>

</ul>

<br>

<h3>مایع</h3>

<p>

مایع‌ها شکل ظرف خود را می‌گیرند.

</p>

<ul>

<li>آب</li>

<li>شیر</li>

<li>آبمیوه</li>

<li>روغن</li>

<li>عسل</li>

</ul>

`

    );

}



// =====================================
// پایان مأموریت
// =====================================

function finishMission(){

    if(missionFinished)
        return;

    missionFinished = true;

    missionArea.style.display = "none";
    missionItem.style.display = "none";

    saveMissionLesson();

    playDialogs(

        [

            {
                speaker:"پروفسور دانا",
                image:"assets/characters/professor/professor_happy.png",
                text:"تبریک {player}! ⭐"
            },

            {
                speaker:"پروفسور دانا",
                image:"assets/characters/professor/professor_teach.png",
                text:"امروز یاد گرفتیم که جامدها شکل ثابتی دارند."
            },

            {
                speaker:"پروفسور دانا",
                image:"assets/characters/professor/professor_teach.png",
                text:"و مایع‌ها شکل ظرف خود را می‌گیرند."
            },

            {
                speaker:"ربو",
                image:"assets/characters/robo/robo_idle.png",
                text:"مطالب این درس داخل دفترچه یادگیری ذخیره شد. 📖"
            }

        ],

        function(){

            if(typeof createConfetti === "function"){

                createConfetti();

            }

            if(mission2Button){

                mission2Button.style.display = "block";

            }

        }

    );

}
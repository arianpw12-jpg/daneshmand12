// =====================================
// Mission 2 Drag System
// Desktop + Mobile
// =====================================

"use strict";

let iceMeltCompleted = false;

const Mission2Drag = {

    enabled:false,

    dragging:false,

    offsetX:0,

    offsetY:0

};

const DragIce={

    ice:document.getElementById("iceCube"),

    heat:document.getElementById("heatSource"),

    water:document.getElementById("waterDrop"),

    game:document.getElementById("gameContainer")

};


// =====================================
// فعال شدن درگ
// =====================================

function enableMission2Drag(){

    Mission2Drag.enabled=true;

}


// =====================================
// Pointer Events
// =====================================

if(DragIce.ice){

    DragIce.ice.style.touchAction="none";

    DragIce.ice.addEventListener(
        "pointerdown",
        startDrag
    );

}

window.addEventListener(
    "pointermove",
    dragIce
);

window.addEventListener(
    "pointerup",
    endDrag
);


// =====================================
// شروع Drag
// =====================================

function startDrag(e){

    if(!Mission2Drag.enabled)
        return;

    Mission2Drag.dragging=true;

    DragIce.ice.setPointerCapture(e.pointerId);

    const rect=
    DragIce.ice.getBoundingClientRect();

    const scale=
    rect.width/
    DragIce.ice.offsetWidth;

    Mission2Drag.offsetX=
    (e.clientX-rect.left)/scale;

    Mission2Drag.offsetY=
    (e.clientY-rect.top)/scale;

    DragIce.ice.style.cursor="grabbing";

}


// =====================================
// حرکت یخ
// =====================================

function dragIce(e){

    if(!Mission2Drag.dragging)
        return;

    const gameRect=
    DragIce.game.getBoundingClientRect();

    const scaleX=
    gameRect.width/1200;

    const scaleY=
    gameRect.height/630;

    let x=

    (e.clientX-gameRect.left)/scaleX

    -

    Mission2Drag.offsetX;

    let y=

    (e.clientY-gameRect.top)/scaleY

    -

    Mission2Drag.offsetY;


    x=Math.max(
        0,
        Math.min(
            1200-DragIce.ice.offsetWidth,
            x
        )
    );

    y=Math.max(
        0,
        Math.min(
            630-DragIce.ice.offsetHeight,
            y
        )
    );


    DragIce.ice.style.left=x+"px";
    DragIce.ice.style.top=y+"px";

    DragIce.ice.style.bottom="auto";
    DragIce.ice.style.transform="none";

}


// =====================================
// پایان Drag
// =====================================

function endDrag(e){

    if(!Mission2Drag.dragging)
        return;

    Mission2Drag.dragging=false;

    DragIce.ice.releasePointerCapture(e.pointerId);

    DragIce.ice.style.cursor="grab";

    checkIceHeatCollision();

}
function checkIceHeatCollision(){

    const iceRect =
    DragIce.ice.getBoundingClientRect();

    const heatRect =
    DragIce.heat.getBoundingClientRect();

    if(intersect(iceRect, heatRect)){

        meltIce();

    }

}
// =====================================
// ذوب شدن یخ
// =====================================

function meltIce(){

    console.log("Ice Melting");

    // مخفی شدن یخ
    DragIce.ice.style.display = "none";

    // نمایش آب
    DragIce.water.style.display = "block";

    // قرار گرفتن آب کنار شمع
    DragIce.water.style.left =
        (DragIce.heat.offsetLeft + 200) + "px";

    DragIce.water.style.top =
        (DragIce.heat.offsetTop + 50) + "px";

    DragIce.water.style.transform = "none";

    // ثبت موفقیت فقط یک بار
    if(!iceMeltCompleted){

        iceMeltCompleted = true;

        addScore(10);

        addLesson(

            "ذوب شدن یخ",

            "یخ با گرفتن گرما ذوب شد و به آب تبدیل شد."

        );

    }

    // بعد از دو ثانیه مثال شکلات نمایش داده شود
    setTimeout(function(){

        showChocolateExample();

    },2000);

}
// =====================================
// بررسی برخورد
// =====================================

function intersect(a,b){

    return !(

        a.right<b.left ||

        a.left>b.right ||

        a.bottom<b.top ||

        a.top>b.bottom

    );

}


// =====================================
// ذوب شدن یخ
// =====================================

function meltIce(){

    Mission2Drag.enabled=false;

    DragIce.ice.style.animation=
    "meltIce 1s forwards";

    setTimeout(function(){

        DragIce.ice.style.display="none";

        DragIce.water.style.display="block";

        DragIce.water.style.animation=
        "waterAppear .8s ease forwards";

        if(!iceMeltCompleted){

            iceMeltCompleted=true;

            addScore(10);

            addLesson(

                "ذوب شدن یخ",

                "یخ با گرفتن گرما ذوب شد و به آب تبدیل شد."

            );

        }

        playDialogs(

            [

                {

                    speaker:"پروفسور دانا",

                    image:"assets/characters/professor/professor_happy.png",

                    text:"دیدی؟ یخ با گرفتن گرما ذوب شد."

                },

                {

                    speaker:"ربو",

                    image:"assets/characters/robo/robo_idle.png",

                    text:"🤖 حالا برویم سراغ آزمایش بعدی."

                }

            ],

            showChocolateExample

        );

    },1000);

}
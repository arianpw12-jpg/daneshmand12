// =====================================
// Mission 3
// آزمون دانشمند کوچولو
// =====================================

"use strict";

console.log("MISSION 3 LOADED");

// =====================================
// وضعیت مأموریت
// =====================================

const Mission3={

    started:false,

    finished:false,

    currentQuestion:0,

    correctAnswers:0,

    currentQuiz:null

};


// =====================================
// عناصر صفحه
// =====================================

const Quiz={

    area:
    document.getElementById("mission3Area"),

    questionNumber:
    document.getElementById("questionNumber"),

    questionText:
    document.getElementById("questionText"),

    answers:
    document.getElementById("answers"),

    answerButton:
    document.getElementById("answerButton"),

    finishWindow:
    document.getElementById("quizFinishWindow"),

    finishText:
    document.getElementById("quizFinishText"),

    reportButton:
    document.getElementById("showReportButton")

};


// =====================================
// سوالات آزمون
// =====================================

const questions=[

{

question:"کدام ماده در حالت مایع است؟",

options:[
"آب",
"یخ",
"شکلات جامد"
],

answer:0

},

{

question:"وقتی یخ گرم می‌شود چه اتفاقی می‌افتد؟",

options:[
"آب می‌شود",
"بزرگ‌تر می‌شود",
"سنگ می‌شود"
],

answer:0

},

{

question:"تبدیل یخ به آب چه نام دارد؟",

options:[
"ذوب (آب شدن)",
"انجماد",
"تبخیر"
],

answer:0

},

{

question:"وقتی آب خیلی سرد شود چه می‌شود؟",

options:[
"یخ می‌شود",
"بخار می‌شود",
"ناپدید می‌شود"
],

answer:0

},

{

question:"تبدیل آب به یخ چه نام دارد؟",

options:[
"انجماد (یخ زدن)",
"ذوب",
"تبخیر"
],

answer:0

},

{

question:"کدام یک جامد است؟",

options:[
"سنگ",
"شیر",
"آب"
],

answer:0

},

{

question:"شکلات با گرم شدن چه تغییری می‌کند؟",

options:[
"ذوب می‌شود",
"یخ می‌شود",
"بزرگ‌تر می‌شود"
],

answer:0

},

{

question:"برای یخ شدن آب به چه چیزی نیاز داریم؟",

options:[
"سرما",
"گرما",
"نور"
],

answer:0

},

{

question:"کدام ماده می‌تواند آب شود؟",

options:[
"یخ",
"هوا",
"نور"
],

answer:0

},

{

question:"کدام جمله درست است؟",

options:[
"گرما باعث ذوب شدن می‌شود.",
"سرما باعث ذوب شدن می‌شود.",
"گرما آب را یخ می‌کند."
],

answer:0

}

];


// =====================================
// شروع مأموریت سوم
// =====================================

function startMission3(){

    Mission3.started=true;

    Mission3.finished=false;

    Mission3.currentQuestion=0;

    Mission3.correctAnswers=0;


    prepareMission3();

    showQuestion();

}


// =====================================
// آماده سازی محیط
// =====================================

function prepareMission3(){

    document.getElementById("missionArea").style.display="none";

    document.getElementById("mission2Area").style.display="none";

    document.getElementById("missionCompleteWindow").style.display="none";

    document.getElementById("mission2Button").style.display="none";

    document.getElementById("mission3Area").style.display="flex";

    document.getElementById("background").style.display="block";


    const robo=document.getElementById("robo");

    robo.style.left="30px";

    robo.style.right="";

    robo.style.bottom="20px";

    robo.style.width="370px";


    const professor=document.getElementById("professor");

    professor.style.right="30px";

    professor.style.left="";

    professor.style.bottom="20px";

    professor.style.width="390px";

}
// =====================================
// به هم زدن ترتیب گزینه‌ها
// =====================================

function shuffleQuestion(question){

    let items = question.options.map((text,index)=>{

        return{

            text:text,

            correct:(index===question.answer)

        };

    });


    for(let i=items.length-1;i>0;i--){

        const j=Math.floor(Math.random()*(i+1));

        [items[i],items[j]]=[items[j],items[i]];

    }


    return{

        question:question.question,

        options:items.map(item=>item.text),

        answer:items.findIndex(item=>item.correct)

    };

}



// =====================================
// نمایش سؤال
// =====================================

function showQuestion(){

    const quiz = shuffleQuestion(

        questions[Mission3.currentQuestion]

    );


    Mission3.currentQuiz = quiz;


    Quiz.questionNumber.innerHTML =

        "سؤال " +

        (Mission3.currentQuestion+1) +

        " از " +

        questions.length;


    Quiz.questionText.innerHTML =

        quiz.question;


    Quiz.answers.innerHTML="";


    quiz.options.forEach(function(option,index){

        const label=document.createElement("label");

        label.className="answerItem";


        const radio=document.createElement("input");

        radio.type="radio";

        radio.name="answer";

        radio.value=index;


        const text=document.createTextNode(

            " " + option

        );


        label.appendChild(radio);

        label.appendChild(text);


        Quiz.answers.appendChild(label);

    });


    Quiz.answerButton.disabled=false;

}



// =====================================
// گرفتن پاسخ انتخاب شده
// =====================================

function getSelectedAnswer(){

    const selected=document.querySelector(

        'input[name="answer"]:checked'

    );


    if(!selected){

        return null;

    }


    return Number(selected.value);

}
// =====================================
// ثبت پاسخ
// =====================================

function submitAnswer(){

    const userAnswer = getSelectedAnswer();


    // هیچ گزینه‌ای انتخاب نشده

    if(userAnswer===null){

        playDialogs(

        [

            {

                speaker:"ربو",

                image:"assets/characters/robo/robo_idle.png",

                text:"🤖 اول یکی از جواب‌ها را انتخاب کن."

            }

        ]

        );

        return;

    }


    Quiz.answerButton.disabled=true;


    const correctAnswer=

    Mission3.currentQuiz.answer;


    // پاسخ صحیح

    if(userAnswer===correctAnswer){

        Mission3.correctAnswers++;

        if(typeof addScore==="function"){

            addScore(5);

        }

    }


    // سؤال بعد

    Mission3.currentQuestion++;


    if(Mission3.currentQuestion<questions.length){

        showQuestion();

    }

    else{

        finishQuiz();

    }

}



// =====================================
// دکمه ثبت پاسخ
// =====================================

if(Quiz.answerButton){

    Quiz.answerButton.onclick=function(){

        submitAnswer();

    };

}



// =====================================
// پایان آزمون
// =====================================

function finishQuiz(){

    Mission3.finished=true;


    Quiz.finishText.innerHTML=

    "🎉 آفرین! آزمون را تمام کردی.<br><br>"+

    "✅ پاسخ صحیح: <b>"+

    Mission3.correctAnswers+

    "</b> از <b>"+

    questions.length+

    "</b><br><br>"+

    "⭐ امتیاز فعلی: <b>"+

    document.getElementById("scoreValue").innerHTML+

    "</b>";


    Quiz.finishWindow.style.display="flex";

}



// =====================================
// دکمه مشاهده لوح افتخار
// =====================================

if(Quiz.reportButton){

    Quiz.reportButton.onclick=function(){

        showCertificate();

   };

}
// =====================================
// نمایش لوح افتخار
// =====================================

function showCertificate(){

    Quiz.finishWindow.style.display="none";

    document.getElementById(
        "certificateWindow"
    ).style.display="flex";


    buildCertificate();
createCertificateStars();
    startCelebration();

}

// =====================================
// نمایش پنجره تشکر
// =====================================

function showThanksWindow(){

    document.getElementById("certificateWindow").style.display = "flex";
    document.getElementById("quizFinishWindow").style.display="none";
    document.getElementById("thanksWindow").style.display = "flex";

}

// =====================================
// ساخت اطلاعات لوح افتخار
// =====================================

function buildCertificate(){

    document.getElementById(

        "certificatePlayerName"

    ).innerHTML=

    localStorage.getItem("playerName") || "دانشمند کوچولو";


    document.getElementById(

        "certificateScore"

    ).innerHTML=

    "⭐ امتیاز کل : " +

    document.getElementById("scoreValue").innerHTML;


    document.getElementById(

        "certificateQuiz"

    ).innerHTML=

    "📚 نتیجه آزمون : " +

    Mission3.correctAnswers +

    " از " +

    questions.length;


    let medal="🥉 مدال برنزی";


    if(Mission3.correctAnswers>=10){

        medal="🥇 مدال طلایی";

    }

    else if(Mission3.correctAnswers>=8){

        medal="🥈 مدال نقره‌ای";

    }


    document.getElementById(

        "certificateMedal"

    ).innerHTML=medal;


    document.getElementById(

        "certificateMessage"

    ).innerHTML=

    "پروفسور دانا و ربو به تو افتخار می‌کنند.<br>" +

    "تو با موفقیت مفاهیم جامد، مایع، ذوب و انجماد را یاد گرفتی. 🌟";

}



// =====================================
// جشن پایان بازی
// =====================================

function startCelebration(){

    const container=

    document.getElementById(

        "celebrationContainer"

    );


    if(!container) return;


    container.innerHTML="";


    for(let i=0;i<80;i++){

        const piece=document.createElement("div");

        piece.className="confetti";


        piece.style.left=

        Math.random()*100+"%";


        piece.style.animationDelay=

        Math.random()*2+"s";


        piece.style.animationDuration=

        (3+Math.random()*2)+"s";


        piece.style.backgroundColor=[

            "#ff5252",

            "#ffd740",

            "#40c4ff",

            "#69f0ae",

            "#ab47bc"

        ][Math.floor(Math.random()*5)];


        container.appendChild(piece);

    }

}



// =====================================
// شروع دوباره بازی
// =====================================

const restartButton=

document.getElementById(

    "restartGameButton"

);


if(restartButton){

    restartButton.onclick=function(){
        restartButton.disabled = true;
        showThanksWindow();

    };

}
function createCertificateStars(){

    const box = document.getElementById("certificateBox");

    box.querySelectorAll(".certificateStar")

    .forEach(s=>s.remove());

    for(let i=0;i<20;i++){

        const star=document.createElement("div");

        star.className="certificateStar";

        star.style.left=Math.random()*95+"%";

        star.style.top=Math.random()*95+"%";

        star.style.animationDelay=

        Math.random()*2+"s";

        box.appendChild(star);

    }

}
// =====================================
// بستن پنجره تشکر
// =====================================

const closeThanksButton =
document.getElementById("closeThanksButton");

if(closeThanksButton){

    closeThanksButton.onclick = function(){

        document.getElementById("thanksWindow").style.display = "none";

        location.reload();

    };

}



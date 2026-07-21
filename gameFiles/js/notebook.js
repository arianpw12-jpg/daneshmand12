// =====================================
// Learning Notebook System
// =====================================


const notebookLessons = [];

let currentLesson = 0;



document.addEventListener(
"DOMContentLoaded",
()=>{


const notebook =
document.getElementById("notebook");


const notebookButton =
document.getElementById("notebookButton");


const closeNotebookButton =
document.getElementById("closeNotebook");


const lessonTitle =
document.getElementById("lessonTitle");


const lessonContent =
document.getElementById("lessonContent");


const prevLessonButton =
document.getElementById("prevLesson");


const nextLessonButton =
document.getElementById("nextLesson");


const lessonPage =
document.getElementById("lessonPage");



// =====================================
// اضافه کردن درس
// =====================================


window.addLesson =
function(title,content){


    notebookLessons.push({

        title:title,

        content:content

    });


    currentLesson =
    notebookLessons.length-1;


};

// =====================================
// نمایش یک درس
// =====================================

function showLesson(index){

    if(notebookLessons.length===0){

        lessonTitle.innerHTML =
        "هنوز چیزی یاد نگرفته‌ای.";

        lessonContent.innerHTML =
        "بعد از پایان هر مأموریت، مطالب اینجا ثبت خواهد شد.";

        return;

    }

    lessonTitle.innerHTML =
    notebookLessons[index].title;

    lessonContent.innerHTML =
    notebookLessons[index].content;

    lessonPage.innerHTML =

    (index + 1) +

    " / " +

    notebookLessons.length;

}







// =====================================
// باز کردن دفترچه
// =====================================


window.openNotebook =
function(){


    if(!notebook)
        return;



    notebook.style.display="block";



    if(currentLesson >= notebookLessons.length){

        currentLesson =
        notebookLessons.length-1;

    }



    if(currentLesson<0){

        currentLesson=0;

    }



    showLesson(currentLesson);


};



// =====================================
// بستن دفترچه
// =====================================


window.closeNotebook =
function(){


    if(notebook){

        notebook.style.display="none";

    }


};



// =====================================
// دکمه دفترچه
// =====================================


if(notebookButton){


    notebookButton.onclick =
    ()=>{

        openNotebook();

    };

}



// =====================================
// دکمه بستن
// =====================================


if(closeNotebookButton){


    closeNotebookButton.onclick =
    ()=>{

        closeNotebook();

    };

}



// =====================================
// درس قبلی
// =====================================


if(prevLessonButton){


prevLessonButton.onclick =
()=>{


    if(currentLesson>0){


        currentLesson--;

        showLesson(currentLesson);


    }


};


}




// =====================================
// درس بعدی
// =====================================


if(nextLessonButton){


nextLessonButton.onclick =
()=>{


    if(currentLesson <
    notebookLessons.length-1){


        currentLesson++;

        showLesson(currentLesson);


    }


};


}



});
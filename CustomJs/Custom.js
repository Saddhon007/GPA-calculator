// toggle department button
function changeDepartment(department) {
    const scienceBtn = document.getElementById("scienceBtn")
    const businessBtn = document.getElementById("businessBtn")
    const humanitiesBtn = document.getElementById("humanitiesBtn")

    if (department === "science") {
        scienceBtn.style = "background:#00834c; color:white";
        businessBtn.style = "background:none";
        humanitiesBtn.style = "background:none";
    }
    else if (department === "business") {

        scienceBtn.style = "background:none;color:black";
        businessBtn.style = "background:#00834c;color:white";
        humanitiesBtn.style = "background:none;"
    }

    else {
        humanitiesBtn.style = "background:#00834c;color:white"
        scienceBtn.style = "background:none;color:black";
        businessBtn.style = "background:none;";
    }

}
// toggle grade formatter button
function changeGradeFormat(format) {

    const grade = document.getElementById("gradeSystemBtn");
    const point = document.getElementById("pointSystemBtn");

    const bengaliGrade = document.getElementById("bengaliGrade");
    const bengaliMarks = document.getElementById("bengaliMarks");

    const englishGrade = document.getElementById("englishGrade");
    const englishMarks=document.getElementById("englishMarks");

    const mathGrade = document.getElementById("mathGrade");
    const mathMarks=document.getElementById("mathMarks");
    
    const religionGrade = document.getElementById("religionGrade");
    const religionMarks=document.getElementById("religionMarks");

    const BangladeshGrade = document.getElementById("BangladeshGrade");
    const BangladeshMarks=document.getElementById("BangladeshMarks");

    const technologyGrade = document.getElementById("technologyGrade");
    const technologyMarks=document.getElementById("technologyMarks");

    const physicsGrade = document.getElementById("physicsGrade");
    const physicsMarks=document.getElementById("physicsMarks");

    const chemistryGrade = document.getElementById("chemistryGrade");
    const chemistryMarks=document.getElementById("chemistryMarks");

    const biologyGrade = document.getElementById("biologyGrade");
    const biologyMarks=document.getElementById("biologyMarks");

    const optionalGrade = document.getElementById("optionalGrade");
    const optionalMarks=document.getElementById("optionalMarks");

    if (format === "grade") {

        bengaliGrade.style = "display:block";
        bengaliMarks.style = "display:none";
        
        englishGrade.style = "display:block";
        englishMarks.style="display:none";

        mathGrade.style = "display:block";
        mathMarks.style="display:none";

        religionGrade.style = "display:block";
        religionMarks.style="display:none";

        BangladeshGrade.style = "display:block";
        BangladeshMarks.style="display:none";

        technologyGrade.style = "display:block";
        technologyMarks.style="display:none";

        physicsGrade.style = "display:block";
        physicsMarks.style="display:none";

        chemistryGrade.style = "display:block";
        chemistryMarks.style="display:none";
        
        biologyGrade.style = "display:block";
        biologyMarks.style="display:none";

        optionalGrade.style = "display:block";
        optionalMarks.style="display:none";

        grade.style = "background:#00834c; color:white";
        point.style = "background:none";
    }
    else {
        bengaliGrade.style = "display:none"
        bengaliMarks.style = "display:block"

        englishGrade.style = "display:none";
        englishMarks.style="display:block";

        mathGrade.style = "display:none";
        mathMarks.style="display:block";

        religionGrade.style = "display:none";
        religionMarks.style="display:block";

        BangladeshGrade.style = "display:none";
        BangladeshMarks.style="display:block";

        BangladeshGrade.style = "display:none";
        BangladeshMarks.style="display:block";

        technologyGrade.style = "display:none";
        technologyMarks.style="display:block";

        physicsGrade.style = "display:none";
        physicsMarks.style="display:block";

        chemistryGrade.style = "display:none";
        chemistryMarks.style="display:block";

        biologyGrade.style = "display:none";
        biologyMarks.style="display:block";

        optionalGrade.style = "display:none";
        optionalMarks.style="display:block";

        point.style = "background:#00834c;color:white";
        grade.style = "background:none;color:black";
    }
}

function subjectCodeChanger(code){
    const dynamicCode=document.getElementById("dynamicCode");
   if(code === "112"){
    dynamicCode.innerHTML=code;
   }
   else if(code === "112"){
    dynamicCode.innerHTML=code;
   }
   else if(code === "113"){
    dynamicCode.innerHTML=code;
   }
   else{
    dynamicCode.innerHTML=code;
   }

}

let quiz = document.getElementById("quiz");
let midterm = document.getElementById("midterm");
let final = document.getElementById("final");

let btnCalSumGrade = document.getElementById("bt-calSumGrade");
let btnCancel = document.getElementById("bt-cancel");

let showSum = document.getElementById("show-sum");
let showGrade = document.getElementById("show-grade");

function calSum() {
  let sum =
    parseInt(quiz.value) + parseInt(midterm.value) + parseInt(final.value);
  return sum;
}

function calGrade(sum) {
  if (sum >= 80) {
    showSum.innerHTML = "<strong>ได้คะแนนรวม " + sum + " คะแนน</strong>";
    showGrade.innerHTML = "<strong>ได้เกรด A</strong>";
  } else if (sum >= 50) {
    showSum.innerHTML = "<strong>ได้คะแนนรวม " + sum + " คะแนน</strong>";
    showGrade.innerHTML = "<strong>ได้เกรด B</strong>";
  } else {
    showSum.innerHTML = "<strong>ได้คะแนนรวม " + sum + " คะแนน</strong>";
    showGrade.innerHTML = "<strong>ได้เกรด C</strong>";
  }
}

function validateData(){
    if(quiz.value.length == 0) {
        alert('ป้อน QUIZ  ด้วย...')
        return false;
    }else if(isNaN(quiz.value)){
        alert('ป้อน QUIZ  เป็นตัวเลขเท่านั้น')
        return false
    }else if(midterm.value.length == 0) {
        alert('ป้อน Midterm ด้วย...')
        return false;
    }else if(isNaN(midterm.value)){
        alert('ป้อน Midterm เป็นตัวเลขเท่านั้น')
        return false
    }if(final.value.length == 0) {
        alert('ป้อน Final ด้วย...')
        return false;
    }else if(isNaN(final.value)){
        alert('ป้อน Final เป็นตัวเลขเท่านั้น')
        return false
    }

    return true
}

btnCalSumGrade.addEventListener("click", () => {
    if(validateData()){
        calGrade(calSum())
    }
});

btnCancel.addEventListener("click", () => {
  showSum.innerHTML = "";
  showGrade.innerHTML = "";
});

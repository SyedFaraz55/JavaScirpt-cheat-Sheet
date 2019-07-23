let score = [];
const n = prompt("Enter how many scores?");
for(let i=0;i<n;i++){
    let s = prompt("Enter Score: " + i);
    score[i] = s;
}

for(let i=0; i<n;i++){
    chart(score[i]);
}

function chart(size){
  for(let i=0; i<size;i++)  {
      document.write('#');
  }
  document.write('<br>');
}


// score,totalScore
// 15/20 => C grade (75%)
let gradeCalc = function(score,totalScore){
    let percentage = (score/totalScore)*100;
    let grade ='';

    if(percentage >=90){
        grade = 'A';
    } else if(percentage>=80){
        grade='B';
    } else if(percentage>=70){
        grade ='C';
    } else if(percentage >=60){
        grade= 'D';
    } else {
        grade = 'F';
    }

    return  `You have got a ${grade} with the percentage of ${percentage}`;
}

let ret = gradeCalc(15,20);
console.log(ret);

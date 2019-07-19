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
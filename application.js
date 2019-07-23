// type correcion: JS automaticall converted type as it needed so that we can display it
let firstname ='david';
let age = 20;
console.log(firstname + ' ' + age);  // david 20

// variable mutation: it means change the value of variables age=20 => age='twenty';
 
// Challenge--1 calculate BMI(body,mass,index)
// /*BMI = mass/(height*height) mass in kg and height in meter | is mark bmi greater than john  *****************/

let markmass = 78;
let markheight = 1.69;
 
let johnmass = 68;
let johnheight = 1.59;

markbmi = markmass / (markheight * markheight);
johnbmi = johnmass / (johnheight * johnheight);
let markshigherBMI = markbmi>johnbmi;
console.log(markshigherBMI)

// Date 

let today = new Date();
let day = today.getDay();
const days = ['sunday','monday','tuesday','wed','thurs','fri','sat','sun'];
console.log(days[day]);

// print
function test() {
    window.print();
}

// Random game

let random = Math.ceil(Math.random()*10);
let guess = prompt("Guess the number between 1- 10 ");
if(guess==random){
    console.log("Matched !");
} else {
    console.log("not matched, Try again !" + random);
}    
// Window Obect

window.username = 'david';
console.log(window.username);
console.log(document.all[5]);

// getting file extensions
const filename = "app.js";
let extenstion  = filename.split('.').pop();
console.log(extenstion);

// Writing function for counting vowels
let string = "Django";
let count = 0;
for(let i=0; i<string.length;i++){
    if(string[i]=='a' || string[i]=='e' || string[i]=='i' || string[i]=='o' || string[i]=='u'){
        count+=1;
    }
}
console.log(count);


// function expression:  this below code doesn't run
alert(foo());
var foo = function(){
    return 5;
}
// function declaration works ! function declaration runs before any code is executed
alert(foo());
function foo(){
    return 5;
}

// Switch Case
let age = prompt("Enter age:");
let res = (age>=18)?true:false;
console.log(res);
const sky = "blue";

switch (sky) {
  case "red":
    console.log("Uh oh.");
    break;
  case "blue":
    console.log("A good day for golf!");
    break;
  default:
    console.log("Try looking up for a hint.");
}

// Scores 
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

// Array functions
enteries()
var array1 = ['a', 'b', 'c'];
let iterator = array1.entries();
for(let i=0;i<array1.length;i++){
    console.log(iterator.next().value);
}

// Objects
let student = {
    name:'David',
    age:21,
    id:316
};

// function constructor
var Person = function(name,age,job) {
    this.name = name;
    this.age = age;
    this.job = job;
}
// prototyping

Person.prototype.calAge = function() {
    console.log(2019-this.age);
}
// creating object 
var p = new Person('Syed',21,'Software Developer');
var p2 = new Person('Arcee',25,'Software Developer');
p.calAge();
p2.calAge();

// object.create()

var personProto = {
    calculateAge:function() {
        console.log(2019-this.age);
    }
};

var john = Object.create(personProto);
var jane = Object.create(personProto, {
    name:{value:'jane'},
    age:{value:20},
    job:{value:'UI/UX Designer'}
})

// Closures 
function marks(mark){
    var msg =' with marks ';
    return function(id){
        console.log(id + msg + mark);
    }
}

var student = marks(68);
student(316);
 
marks(68)(316);

// Clousers Example 
function interviewQuestion(job){
    return function(name){
        if(job==='designer'){
            console.log('What is the difference between UI/UX ?');
        }else if(job==='developer'){
            console.log('what is object oriented Programming?');
        } else {
            console.log('Hello ? what do you do? ');
        }
    }
}

interviewQuestion('developer')('david');


//////////////////////// Bind,Call,Apply

let student = {
    name:'syed',
    age:21,
    data:function(){
        console.log('Name: ' + this.name + ' age: ' + this.age);
    }
};

let student2 ={
    name:'majeed',
    age:21
};

let student3 ={
    name:'aleem',
    age:21
};

student.data.call(student3);   //Call()
var fn = student.data.bind(student3); //bind()
fn();






















// Displaying Hello World !
console.log('Hello World !');

// undefined null represendt the absence of value

// prompt(),parseInt(),document.write(),confirm();
let value = confirm('Are you sure you want to exit !');
if(value){
    document.write('Exited');
} else {
    document.write('Processing...')
}

// Creating Temprature Converter
var fahrenheit = 32;
var celsius = (fahrenheit - 32) * 5/9;
console.log(celsius);

// // Challenge Area for IF Statement
let temp = 45;
if(temp <=32){
    console.log('It is freezing outside');
} else if(temp>=110){
    console.log('It is hot outside')
} else{
    console.log('Go for it, its pretty outside')
}

// Lets go ahead and explore the scoping rule
// lexical scoping (static hoping)
// Global  - Defined outside the code block 
// Local - Defined Inside the code block

let name ='andrew';

if(true){
    
    console.log('First: ' +name);
    
    if(true){
        let name = 'susan';
        console.log('Second ' + name);
        
    }
    console.log('Extra: ' + name);
}

if(true){
    console.log('Third: ' + name);
}

// functions expession - console.log greeting and see what will be the output ??? 

let greeting = function(){
    console.log()
}

// // function expession wtih parameter

let square = function(num){
    let result = num * num;
    return result;
}

let ret = square(2);
console.log(ret);
// // Challenge: Create a function which accept a message & name and show string like you have one notification (prompt) -- function expression
// // Challenge: Create temp calculator

let temp = function(fahr){
    let celsius = (fahr - 32) * 5/9;
    return celsius;
}

let convertedTemp = temp(32);
console.log(convertedTemp);

// Undefined and null

let name = 'david';

if(name===undefined){
    console.log('Please provide a name');
} else {
    console.log('Welcome ' + name);;
    
}

let characters = ['brain','susan','andrew'];
// characters.reverse();
// characters.sort();
let index = characters.indexOf('david');
console.log(index);

// List application:
let list  = [];
let size = parseInt(prompt("Enter the list Size"));
if(size>0) {
    document.write(
    `<div class="material-icons mdl-badge mdl-badge--overlap" data-badge=${size}>account_box</div>`
        );
    // For adding elements to an array
    for(let i=0; i<size; i++){
        const item = prompt("Enter Item " + i);
        list[i] = item;
    }
    // Display information
    for(let i=0; i<size;i++){
        document.write('<li>' + list[i] + '</li>');
    }
    
    let isTrue = confirm("Are you want to search List ?");
    if(isTrue){
        let key = prompt('Enter element to be searched');


    let keyResult = list.find(function(value,index,arr){
        if(value === key){
            document.write('<h3 style="color:coral">' + value + ' ' + 'found at position ' + index + '</h3>');
        }
    });

    }
    
} else {
    document.write('Invalid Size');
}

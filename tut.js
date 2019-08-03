let todo =['Exercise','Coding','Meeting','Gym'];
let key= 'Testing';
let result = todo.findIndex(function(ele,index){
    if(ele === key){
        return index;
    }
    return false;
});
// Find Index
if(result == -1){
    console.log('Not Found !');
} else{
    console.log(`${key} is found at position ${result}`);
}
const index = todo.indexOf('Coding');
console.log(index);



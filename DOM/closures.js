// A inner function has always access to the variable and paramerters of its outer function even after outer funtion return

function retirement(retirementAge){
    let message = ' years left until retirement ';
    return function(year){
        var age = 2019 - year;
        console.log(retirementAge - age + message);
    }
}
retirement(66)(1990);
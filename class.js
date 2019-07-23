class Person {
    constructor(name){
        this.name = name;
    }
    walk() {
        console.log("walk");
    }
}

const person  = new Person('syed');
console.log(person);

class Teacher extends Person{
    constructor(name,degree){
        super(name);
        this.degree = degree;
    }
    teach(){

    }
}

const teacher = new Teacher('Muzzafar Sir');
teacher.walk();
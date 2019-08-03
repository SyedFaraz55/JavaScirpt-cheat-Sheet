const Person = function(fname,age,like=[]){
    this.firstName = fname;
    this.age = age;
    this.like - likes;
};

Person.prototype.getBio = function() {
    console.log(`${this.firstName} is ${this.age}`);
}
Person.prototype.setName = function(fullName){
    const names= fullName.split(' ');
    this.firstName = names[0];
    this.lastName = names[1];
}

const p1 = new Person('David',26);
p1.getBio();
p1.setName('David Malan');
p1.getBio();
// Call()

let person = {
    name:'David',
    age:20,
    data:function(id) {
        console.log(`Name:${this.name} Age: ${this.age} with id ${id}`);
    }
}

let second = {
    name:'Susan',
    age:21
};
// person.data.call(second,316);
// person.data.apply(second,[316]);
let david = person.data.bind(second); // bind returns  a function undefined then we'll pass another value at david(id)
david(7671)
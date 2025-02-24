// let obj = {
//     a: 1;
//     b: "Raj";
// }

// console.log(obj); // { a: 1, b: 'Raj' }

// let animal = {
//     eats: true
// ;
// }

// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal; //sets rabbit
// [[Prototype]] = animal

class Animal {
    constructor(name) {
        this.name = name;
        console.log('object is created...');
    }


    eats() {
        console.log('Kha raha hoon');
    }

    jumps() {
        console.log('Kood raha hoon');
    }

}

class lion extends Animal {
    constructor(name) {
        super(name)
        console.log('Lion is created...');

    }

    eats() {
        super.eats();
        console.log('Kha raha hoon roar');
    }
}

let a = new Animal("Bunny");
console.log(a);

let l = new lion("shera")
console.log(l);
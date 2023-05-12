"use strict";
// basic types
let id = 5;
//console.log('ID:',id)
let company = 'Google';
let isPublished = true;
let x = 'hello';
x = true;
let age;
age = 25;
//arrays
let ids = [1, 2, 3, 4, 5];
let arr = [true, 3, 'samuel', 7, false];
//tuple
let person = [1, 'ram', true];
//tuple array
let employee;
employee = [
    [1, 'abi'],
    [2, 'babu'],
    [3, 'chand'],
];
//union
let productis = 22;
//enum
var Dirrection;
(function (Dirrection) {
    Dirrection[Dirrection["Up"] = 1] = "Up";
    Dirrection[Dirrection["Down"] = 2] = "Down";
    Dirrection[Dirrection["Left"] = 3] = "Left";
    Dirrection[Dirrection["Right"] = 4] = "Right";
})(Dirrection || (Dirrection = {}));
console.log(Dirrection.Down);
var Dirrection1;
(function (Dirrection1) {
    Dirrection1["Up"] = "Up";
    Dirrection1["Down"] = "Down";
    Dirrection1["Left"] = "Left";
    Dirrection1["Right"] = "Right";
})(Dirrection1 || (Dirrection1 = {}));
console.log(Dirrection1.Down);
const user = {
    id: 1,
    name: "John"
};
// type Assertion
let cid = 1;
//1 let customerid = <number> cid
let customerid = cid; //2
//functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(3, 4));
//void
function log(message) {
    console.log(message);
}
log(5);
log('hello');
const user1 = {
    id: 1,
    name: "John"
};
const p1 = "ram";
const p2 = 8;
const add = (x1, y1) => x1 + y1;
const sub = (x1, y1) => x1 - y1;
//classes
class Preson {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //console.log(123)
    }
    register() {
        return `${this.name} is registered`;
    }
}
const john = new Preson(111, 'john gates');
const mike = new Preson(222, 'mike tommy');
console.log(john, mike);
console.log(john.register());
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is registered`;
    }
}
//extending a class 
//sub-class
class Employee extends Student {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(333, 'brad', 'developer');
console.log(emp.name);
console.log(emp.register());
//generics
// function getArray(items:any[]): any[]{
//     return new Array().concat(items)
// }
// let numArray = getArray([1,2,3,4])
// let strArray = getArray(['sam','ram', 'tim','rob'])
// numArray.push('hello')
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['sam', 'ram', 'tim', 'rob']);
//numArray.push('hello')

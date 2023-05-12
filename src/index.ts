// basic types
let id:number = 5;
//console.log('ID:',id)

let company:string = 'Google'
let isPublished:boolean = true

let x:any = 'hello'
x=true

let age: number
age=25

//arrays
let ids:number[] = [1,2,3,4,5]
let arr:any[] = [ true , 3 , 'samuel' , 7 , false ]

//tuple
let person: [number, string,boolean]= [1,'ram',true]

//tuple array
let employee:[number,string][]

employee=[
    [1,'abi'],
    [2,'babu'],
    [3,'chand'],
]

//union
let productis: string| number = 22

//enum
enum Dirrection {
    Up=1, // by default 0,1,2,3
    Down,
    Left,
    Right
}
console.log(Dirrection.Down)

enum Dirrection1 {
    Up='Up', // by default 0,1,2,3
    Down='Down',
    Left='Left',
    Right='Right'
}
console.log(Dirrection1.Down)

//objects
// const user : {
//     id: number,
//     name : string
// }= {
//     id : 1,
//     name : "John"
// }

type User = {
    id: number,
    name : string
}

const user: User = {
    id : 1,
    name : "John"
}

// type Assertion
let cid = 1
//1 let customerid = <number> cid

let customerid = cid as number //2

//functions
function addNum(x: number,y:number): number{
    return x +y;
}
console.log(addNum(3,4))

//void
function log(message: string|number): void{
    console.log(message)
}

log(5)
log('hello')

//interfaces => dont work with union and primitives
interface UserInterface {
    id: number,      //readonly id: number
    name : string,
    age? : number //optional
}

const user1: UserInterface = {
    id : 1,
    name : "John"
}

//use of type
type Point = number| string
const p1 :Point = "ram"
const p2 :Point = 8

//function interface
interface MathFunc{
    (x1:number, y1:number):number
}

const add: MathFunc = (x1:number, y1:number):number => x1 + y1
const sub: MathFunc = (x1:number, y1:number):number => x1 - y1

//classes
class Preson{
    id : number // here id can be private or protected access specifier
    name : string

    constructor(id:number, name: string){
        this.id= id
        this.name= name
        //console.log(123)
    }
    register(){
        return `${this.name} is registered`
    }
}
const john = new Preson(111,'john gates')
const mike = new Preson(222,'mike tommy')
console.log(john,mike)
console.log(john.register())

//implementing interface in class
interface StudentInterface {
    id: number,      
    name : string,
    register() : string
}

class Student implements StudentInterface{
    id : number 
    name : string

    constructor(id:number, name: string){
        this.id= id
        this.name= name
    }
    register(){
        return `${this.name} is registered`
    }
}


//extending a class 
//sub-class
class Employee extends Student{
    position : string

    constructor(id:number,name:string,position:string){
        super(id,name)
        this.position= position
    }
}

const emp = new Employee(333, 'brad','developer')

console.log(emp.name)
console.log(emp.register())

//generics

// function getArray(items:any[]): any[]{
//     return new Array().concat(items)
// }
// let numArray = getArray([1,2,3,4])
// let strArray = getArray(['sam','ram', 'tim','rob'])

// numArray.push('hello')

function getArray<T>(items:T[]): T[]{
    return new Array().concat(items)
}
let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['sam','ram', 'tim','rob'])

//numArray.push('hello')


// types
let id: number = 5;
let company: string = 'company name';
let isPublished: boolean = true;
let x: any = 'Hello';
let age: number;

let ids: number[] = [1, 2, 3, 4, 5];
ids.push(1);

let arr: any[] = [1, true, 'Hello'];

// Tuple - specify exact types within array
let person: [number, string, boolean] = [1, 'hello', true];

// Array of tuples
let employee: [number, string][] = [
    [1, "john"],
    [2, "Maria"],
    [3, "bob"]
]

// Unions - can be multiple specific types
let pid: string | number = 22;

// Enum - define a set of named constants (defaults to consecutive integers)
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}
console.log(Direction1.Up)

// Objects
const user: {
    id: number,
    name: string
} = {
    id: 1,
    name: 'John'
}

// Better way with objects:
type User = {
    id: number,
    name: string
}

const user2: User = {
    id: 1,
    name: 'John'
}

// Type assertion (basically type casting) - 2 methods
let cid: any = 1
let customerID = <number>cid
let customerID2 = cid as string;

// Functions - specify input and return types
function addNum(x: number, y: number): number {
    return x + y;
}

function log(message: string | number): void{
    console.log(message);
}

log(5);

// Interfaces
interface UserInterface {
    readonly id: number // readonly
    name: string
    age?: number // optional
}

const user23: UserInterface = {
    id: 1,
    name: 'John'
}

// difference: types can be used with primitives and unions
type point = number | string;
const p1: point = 1;

// Using interfaces with functions
interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y

// Classes
class Person {
    // private = can only access from within class
    private id: number // access modifier

    // protected = can only access from within this class or classes extended from this class
    protected id2: number;

    // public = can always access, DEFAULT
    name: string

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.id2 = 2;
    }

    register() {
        return `${this.name} is now registered`
    }
}

const brad = new Person(1, "DR");

console.log(brad.register());

// CLASS INTERFACE
interface PersonInterface 
{
    id: number
    name: string
    register(): string
}

class Person2 implements PersonInterface {
    id: number
    name: string

    constructor(){
        this.id = 1;
        this.name = "bob";
    }
    register(): string {
        return 'hello'
    }

}

// Class extension - create a subclass
class Employee extends Person {
    position: string;

    constructor(id: number, name: string, position: string){
        super(id, name);
        this.position = position
    }
}

let dallin = new Employee(12, "Dallin", "CEO")
console.log(dallin.name);

// Generics - build reusable components
function getArray(items: any[]): any[] {
    return new Array().concat(items);
}

let numArray = getArray([1, 2, 3, 4])
let strArray = getArray(['brad', 'john', 'jill']);

numArray.push('hello'); // this works

function getArray2<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray2 = getArray2<number>([1, 2, 3, 4]);
let strArray2 = getArray2<string>(["yes", "no"])

// Now it won't work!!
// strArray2.push(1);
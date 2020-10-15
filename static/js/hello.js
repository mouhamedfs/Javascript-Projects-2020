console.log('Hello');
//alert('Hello from Mouhamed');

let b = "smoothie";
console.log(b);

const someNumber = 45;
//console.log(someNumber);

/*
var age = prompt('What is your age ?');
document.getElementById('titleh1').innerHTML=age;


 */
let num1 = 10

//increment
num1++;
console.log(num1);

//decrement
num1--;
console.log(num1);

console.log(num1 % 5);

num1*=10;
console.log(num1);

function fun() {
    console.log('this is for fun')
}

fun();

function greetings(yourName) {
    let result = "Hello" + ' '+ yourName;
    console.log(result);
}

//let name = prompt('What is your name ?');
//greetings(name);

function someNumbers(num1,num2) {

    let result = num1+num2;
    console.log(result);
}

someNumbers(12,6);

/*

boucle while
let n = 0;
while (n < 100) {
    n+=1;
    console.log(n);
}
//boucle for
for(let i =0;i <=10;i++){
    console.log(i);
}
 */

let num  = 18; //numbers
let full="Mouhamed" //string
let person={first:'Mouhamed',last:'Sane'}; //object
let bool = true;//boolean
let groceries = ['apple','banana']; //array
let def;//undefined
let nothing = null;//null

let fruit='banana';

console.log(fruit.length);
console.log(fruit.indexOf('ba'));
console.log(fruit.slice(2,6));
console.log(fruit.replace('ban',123));
console.log(fruit.toLowerCase());
console.log(fruit.toUpperCase());
console.log(fruit.charAt(2));
console.log(fruit.split(','));

let fruits = ['banana','apple','mango'];
fruits = new Array('banana','apple','mango');

console.log(fruits[2]);
fruits[0] = 'Poire';
console.log(fruits[0]);

for(let i = 0;i<fruits.length;i++){
    console.log(fruits[i]);
}
console.log('to string',fruits.toString());
console.log(fruits.join("-"));
console.log(fruits.pop());
console.log(fruits.push('blackberries'),fruits);

fruits.unshift('kiwi');
console.log(fruits);

let vegetables = ['lekk','nane','doxane'];
let allgroceries = fruits.concat(vegetables);
console.log(allgroceries.sort());

let someNum  =[5,22,55,556,497,4,52];
console.log(someNum.sort(function (a,b)  {return a-b
}))


let emptyarray = new Array();
for(let n =0;n <=100;n++){
   emptyarray.push(n);
}
console.log(emptyarray);

let student = {
    first:'Mouhamed',
    last:'Sane',
    age:24,
    height:165,
    studentInfo:function () {
        return this.first + '\n' + this.last;
    }
}
/*
console.log(student.first);
console.log(student.last);
student.age++;
console.log(student.age);
console.log(student.studentInfo());

 */

/*
const age = prompt('What is your age');
if( (age >=18)&&(age<=35)){
    statut = 'Dans la tranche d age';
    console.log(statut);
}else {
    statut = 'Pas disponible';
    console.log(statut);
}
 */


switch (1) {
    case 0:
        text = 'Weekend';
        break;
    case 5:
        text = 'Weekend';
        break;
    case 6:
        text = 'Weekend';
        break;
    default:
        text = 'Weekday';
        break;
}
console.log(text);

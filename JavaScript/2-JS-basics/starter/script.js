/*****************************************
    Varitables and data types
*/

var firstName = 'John';

console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;

console.log(fullAge);

var job;

console.log(job);

job = 'Teacher';
console.log(job);

//Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';

/****
    Variable mutation and type coercion
 */

 var firstName = 'John';
 var age = 28;

 //Type coersion 
 console.log(firstName + ' ' + age)


 var job, isMarried;

 job = 'Teacher';
 isMarried = false;

 console.log(firstName + ' is a ' + age + ' year old ' + job +'. Is he married? ' + isMarried); 

 //Variable mutation
 age = 'twenty eight';
 job = 'driver';

 alert(firstName + ' test alert')

 var inputName = prompt('What is his last name?')

 console.log('Name inputted was : ' + inputName);

 //Basic Operators

 //Math operators
 var year, yearJohn, yearMark;
 year = 2018;
 yearJohn = year - 28;
 yearMark = year - 33;

 console.log(yearJohn);

 console.log(2020 / + 2);
 console.log(now * 2);
 console.log(now / 10);

//Logical operator

//returns true or false
year1 = 1;
year2 = 2;
var year2MoreBool = year2 > year1;

//typeof operator

//returns type of variable
console.log(typeof year);

//Operator precendence
var now = 2018;
var yearJohn = 1989;
var comingOfAge = 18;

var hasComeOfAge = now - yearJohn >= comingOfAge;

console.log(hasComeOfAge);

//Grouping
var ageJohn = now -yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;

console.log(x, y);

//More operators
x *= 2;
x += 1;
x ++;

//if else statements
var firstName = 'John';
var civilStatus = 'single';

if(civilStatus === 'married'){
    console.log(firstName + 'is married!');
}
else{
    console.log(firstName + 'is not married');
}

var isMarried = true;

if(isMarried)
{
    console.log(firstName + 'is married')
}
else{
    console.log(firstName + 'is not married')
}

var firstName = 'John'
var age = 16;

if(age < 13){
    console.log('boy');
}else if(age >= 13 && age < 20){
    console.log('teenager');
}else{
    console.log('man');
}

//The ternary operator and switch statements
var firstName = 'John';
var age = 16;

//ternary operator
//Alternative to an if else statement
age >= 18 ? console.log(firstName + ' drinks beers') : console.log(firstName + 'drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';

//Switch statement
switch(job){
    case 'teacher':
    case 'instructor':
        var salary = 24000;
        break;
    case 'millionaire':
        var salary = 1000000;
        break;
    default:
        var salary = 0;

}
switch (true){
    case age > 13:
        var value = 'boy';
        break;
}

//truthy and falsy values and equality operators

var height;

if(height)
{
    console.log('variable is defined');
}
else
{
    console.log('variable has not been defined')
}

//function
function calculateAge(birthYear){
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);

//functions statements and expressions
var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + 'teaches kids how to code';
        case 'driver':
            return firstName + 'drives a cab in lisbon';
        case 'designer':
            return firstname + 'designs beautiful websites';
        default:
            return firstName + 'does something else';
    }
}

console.log(whatDoYouDo('teacher', 'John'));

//Arrays
var names = ['john','melinda','Jane']
var years = new Array(1990, 1996,1948);

console.log(names[0]);

//Mutate array data
names[1] = 'Ben';

names[5] = 'Mary';

console.log(names);

var john =  [1,2,3];

//adds to front of array
john.unshift(0);
//adds to end of array
john.push(4);
//deletes last one
john.pop();

//search array for a value

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';

console.log(isDesigner);

//Objects and properties
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

var jane = new Object();
jane.firstName = 'Jane';


//Objects and methods
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(birthYear){
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();


//Loops and iteration
for (var i = 0; i < 10; i++)
{
    console.log(i);
}


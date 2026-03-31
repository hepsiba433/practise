//. Named Function//

function name() {
    console.log("hepsiba");
}
name();
//another example//
function add(a, b) {
    console.log(a + b);
}
add(5, 3);



//annonymous function//

 greets = function() {
    console.log("Hello!");
};
greets(); 


//Function Expression//
//Storing a function inside a variable//
let greet = function() {
    console.log("I love India");
};

greet();

//Arrow Function (ES6)//
let greetss = () => {
    console.log("Company name oppty");
};

greetss();


//Immediately Invoked Function Expression (IIFE)//
(function() {
    console.log("I need to sleep");
})();


//Callback Functions//
function ready() {
    console.log("Food is ready!");
}

function orderFood(callback) {
    console.log("Preparing food...");
    callback(); // call after preparation
}

orderFood(ready);

//Constructor Function//
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Creating objects
let p1 = new Person("Ramya", 25);
let p2 = new Person("Divya", 30);

console.log(p1.name); 
console.log(p2.age);  

//async function//
async function greetsss() {
    return "Hello";
}

greetsss().then(function(result) {
    console.log(result);
});

//Generator Function//
function* text() {
    yield "Hello";
    yield "World";
}

let g = text();

console.log(g.next().value); // Hello
console.log(g.next().value); // World

//Recursive Function//
function countDown(n) {
    if (n === 0) {
        console.log("Done");
        return;
    }
    
    console.log(n);
    countDown(n - 1);
}

countDown(5);

//Higher-Order Function//
function texted(name) {
    console.log("Hello " + name);
}

function processUser(callback) {
    callback("John");  // calling function
}

processUser(texted);



//Nested Functions//
function outer() {
    console.log("Outer function");

    function inner() {
        console.log("Inner function");
    }
    inner(); // calling inner function
}
outer();


//Pure Functions//
function square(n) {
    return n * n;
}
console.log(square(4)); 


//Default Parameter Function//
function word(name = "Guest") {
    console.log("Hello " + name);
}
word("John"); // Hello John
word();       // Hello Guest


//Rest Parameter Function//
function showNumbers(...nums) {
    console.log(nums);
}

showNumbers(1, 2, 3, 4);







